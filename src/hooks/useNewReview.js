import { useMutation } from '@apollo/client';
import { CREATE_REVIEW } from '../graphql/mutations';

const useNewReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const newReview = async ({ review }) => {
    const { data } = await mutate({
      variables: { review },
    });

    return { data };
  };

  return [newReview, result];
};

export default useNewReview;