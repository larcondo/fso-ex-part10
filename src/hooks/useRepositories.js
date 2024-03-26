import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = (variables) => {
  const { data, loading, ...result } = useQuery(GET_REPOSITORIES, {
    variables,
    fetchPolicy: 'cache-and-network',
  });

  return {
    repositories: data?.repositories,
    loading,
    ...result,
  };
};

export default useRepositories;