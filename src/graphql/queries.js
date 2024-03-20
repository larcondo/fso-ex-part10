import { gql } from '@apollo/client';
import { BASIC_REPOSITORY_FIELDS } from './fragments';

export const GET_REPOSITORIES = gql`
  ${BASIC_REPOSITORY_FIELDS}
  query {
    repositories {
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
  query Repository($repositoryId: ID!) {
    repository(id: $repositoryId) {
      ...BasicRepositoryFields
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;

export const ME = gql`
  query Me {
    me {
      username,
      createdAt
    }
  }
`;