import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useQuery } from '@apollo/client';
import { ME } from '../graphql/queries';

import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';

const LoadingIndicator = () => <ActivityIndicator animating={true} size={'large'} style={styles.loadingIndicator}/>;
const NoResults = () => <Text style={styles.noResultsText}>No results</Text>;

const MyReviews = () => {
  const { data, loading } = useQuery(ME, {
    variables: { includeReviews: true },
    fetchPolicy: 'cache-and-network',
  });

  const reviews = data?.me?.reviews
    ? data.me.reviews.edges
    : [];

  return(
    <View style={styles.container}>
      <MyReviewList reviews={reviews} loading={loading} />
    </View>
  );
};

const MyReviewList = ({ reviews, loading }) => {
  const reviewNodes = reviews
    ? reviews.map( edges => edges.node )
    : [];

  return(
    <FlatList
      data={reviewNodes}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <ReviewItem review={item} showRepoName />}
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
  container: {
    flex: 1,
    alignSelf: 'stretch',
  },
  noResultsText: {
    alignSelf: 'stretch',
    textAlign: 'center',
    paddingVertical: 20,
  },
  loadingIndicator: {
    paddingVertical: 20,
  }
});

export default MyReviews;