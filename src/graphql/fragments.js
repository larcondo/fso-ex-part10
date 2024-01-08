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