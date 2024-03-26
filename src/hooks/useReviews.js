import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

const useReviews = (includeReviews = false) => {
  const { data, loading, ...result } = useQuery(ME, {
    variables: { includeReviews },
    fetchPolicy: 'cache-and-network',
  });

  return {
    reviews: data.me?.reviews.edges,
    loading,
    ...result,
  };
};

export default useReviews;