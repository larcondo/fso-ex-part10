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

// other queries