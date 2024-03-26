import { gql } from '@apollo/client';

export const BASIC_REPOSITORY_FIELDS = gql`
  fragment BasicRepositoryFields on Repository {
    id
    fullName
    description
    language
    forksCount
    stargazersCount
    ratingAverage
    reviewCount
    ownerAvatarUrl
  }
`;

export const REVIEWS_FIELDS = gql`
  fragment ReviewsFields on Review {
    id
    text
    rating
    createdAt
    user{
      username
    }
    repository {
      fullName
    }
  }
`;