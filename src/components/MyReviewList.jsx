import { Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';

const LoadingIndicator = () => (
  <ActivityIndicator
    animating={true}
    size={'large'}
    style={styles.loadingIndicator}
  />
);
const NoResults = () => <Text style={styles.noResultsText}>No results</Text>;

const MyReviewList = ({ reviews, loading, refetch }) => {
  if (!reviews) return null;

  const reviewNodes = reviews
    ? reviews.map( edges => edges.node )
    : [];

  return(
    <FlatList
      data={reviewNodes}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ReviewItem review={item} showRepoName refetch={refetch}/>}
      ItemSeparatorComponent={<ItemSeparator />}
      ListEmptyComponent={
        loading
          ? <LoadingIndicator />
          : <NoResults />
      }
    />
  );
};

const styles = StyleSheet.create({
  noResultsText: {
    alignSelf: 'stretch',
    textAlign: 'center',
    paddingVertical: 20,
  },
  loadingIndicator: {
    paddingVertical: 20,
  }
});

export default MyReviewList;