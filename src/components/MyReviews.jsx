import { View, StyleSheet } from 'react-native';
import useReviews from '../hooks/useReviews';

import MyReviewList from './MyReviewList';

const MyReviews = () => {
  const { reviews, loading } = useReviews(true);

  return(
    <View style={styles.container}>
      <MyReviewList reviews={reviews} loading={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default MyReviews;