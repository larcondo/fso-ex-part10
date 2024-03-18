import { RepositoryListContainer } from '../../components/RepositoryList';
import { render, screen, within } from '@testing-library/react-native';
import { formatStatValue } from '../../components/RepositoryStat';

const repos = {
  totalCount: 8,
  pageInfo: {
    hasNextPage: true,
    endCursor:
      'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    startCursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
  },
  edges: [
    {
      node: {
        id: 'jaredpalmer.formik',
        fullName: 'jaredpalmer/formik',
        description: 'Build forms in React, without the tears',
        language: 'TypeScript',
        forksCount: 1619,
        stargazersCount: 21856,
        ratingAverage: 88,
        reviewCount: 3,
        ownerAvatarUrl:
          'https://avatars2.githubusercontent.com/u/4060187?v=4',
      },
      cursor: 'WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd',
    },
    {
      node: {
        id: 'async-library.react-async',
        fullName: 'async-library/react-async',
        description: 'Flexible promise-based React data loader',
        language: 'JavaScript',
        forksCount: 69,
        stargazersCount: 1760,
        ratingAverage: 72,
        reviewCount: 3,
        ownerAvatarUrl:
          'https://avatars1.githubusercontent.com/u/54310907?v=4',
      },
      cursor:
        'WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==',
    },
  ],
};

describe('RepositoryList', () => {
  describe('RepositoryListContainer', () => {
    it('renders repository information correctly', () => {
      render(<RepositoryListContainer repositories={repos} />);

      const repositoryItems = screen.getAllByTestId('respositoryItem');
      const [firstItem, secondItem] = repositoryItems;

      expect(within(firstItem).getByTestId('repo-name')).toHaveTextContent(repos.edges[0].node.fullName);
      expect(within(firstItem).getByTestId('repo-desc')).toHaveTextContent(repos.edges[0].node.description);
      expect(within(firstItem).getByTestId('repo-lang')).toHaveTextContent(repos.edges[0].node.language);
      expect(within(firstItem).getByTestId('forks')).toHaveTextContent(formatStatValue(repos.edges[0].node.forksCount));
      expect(within(firstItem).getByTestId('forks')).toHaveTextContent('Forks');
      expect(within(firstItem).getByTestId('stars')).toHaveTextContent(formatStatValue(repos.edges[0].node.stargazersCount));
      expect(within(firstItem).getByTestId('stars')).toHaveTextContent('Stars');
      expect(within(firstItem).getByTestId('rating')).toHaveTextContent(formatStatValue(repos.edges[0].node.ratingAverage));
      expect(within(firstItem).getByTestId('rating')).toHaveTextContent('Rating');
      expect(within(firstItem).getByTestId('reviews')).toHaveTextContent(formatStatValue(repos.edges[0].node.reviewCount));
      expect(within(firstItem).getByTestId('reviews')).toHaveTextContent('Reviews');

      expect(within(secondItem).getByTestId('repo-name')).toHaveTextContent(repos.edges[1].node.fullName);
      expect(within(secondItem).getByTestId('repo-desc')).toHaveTextContent(repos.edges[1].node.description);
      expect(within(secondItem).getByTestId('repo-lang')).toHaveTextContent(repos.edges[1].node.language);
      expect(within(secondItem).getByTestId('forks')).toHaveTextContent(formatStatValue(repos.edges[1].node.forksCount));
      expect(within(secondItem).getByTestId('forks')).toHaveTextContent('Forks');
      expect(within(secondItem).getByTestId('stars')).toHaveTextContent(formatStatValue(repos.edges[1].node.stargazersCount));
      expect(within(secondItem).getByTestId('stars')).toHaveTextContent('Stars');
      expect(within(secondItem).getByTestId('rating')).toHaveTextContent(formatStatValue(repos.edges[1].node.ratingAverage));
      expect(within(secondItem).getByTestId('rating')).toHaveTextContent('Rating');
      expect(within(secondItem).getByTestId('reviews')).toHaveTextContent(formatStatValue(repos.edges[0].node.reviewCount));
      expect(within(secondItem).getByTestId('reviews')).toHaveTextContent('Reviews');

    });
  });
});