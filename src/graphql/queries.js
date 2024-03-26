import { gql } from '@apollo/client';
import { BASIC_REPOSITORY_FIELDS, REVIEWS_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${BASIC_REPOSITORY_FIELDS}
  query Repositories(
    $orderBy: AllRepositoriesOrderBy,
    $orderDirection: OrderDirection,
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy,
      orderDirection: $orderDirection,
      searchKeyword: $searchKeyword
    ) {
      edges {
        cursor
        node {
          ...BasicRepositoryFields
        }
      }
    }
  }
`;

export const REPOSITORY_BY_ID = gql`
  ${BASIC_REPOSITORY_FIELDS}
  ${REVIEWS_FIELDS}
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...BasicRepositoryFields
      url
      reviews {
        edges {
          node {
            ...ReviewsFields
          }
        }
      }
    }
  }
`;

export const ME = gql`
  ${REVIEWS_FIELDS}
  query Me($includeReviews: Boolean = false) {
    me {
      username,
      createdAt,
      reviews @include(if: $includeReviews) {
        edges {
          node {
            ...ReviewsFields
          }
        }
      }
    }
  }
`;