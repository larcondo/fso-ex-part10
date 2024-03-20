import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { REPOSITORY_BY_ID } from '../graphql/queries';
import { format } from 'date-fns';

import theme from '../theme';

import RepositoryItem from './RepositoryItem';
import LoadingText from './LoadingText';

const RepositoryInfo = ({ repo }) => {
  // Repository's information implemented in the previous exercise
  return(
    <View style={styles.container}>
      <RepositoryItem repo={repo} linkVisible />
    </View>
  );
};

const ReviewItem = ({ review }) => {
  // Single review item
  return(
    <View style={styles.reviewItem}>
      <View style={styles.reviewRating}>
        <Text style={styles.reviewRatingText}>
          { review.rating }
        </Text>
      </View>
      <View style={styles.reviewContainer}>
        <Text style={styles.reviewUsername}>{ review.user.username }</Text>
        <Text style={styles.reviewDate}>{ format(new Date(review.createdAt), 'dd.MM.yyyy') }</Text>
        <Text style={styles.reviewText}>{ review.text }</Text>
      </View>
    </View>
  );
};

const RepositoryPage = () => {
  const { id } = useParams();
  const { data, error, loading } = useQuery(REPOSITORY_BY_ID, {
    variables: { repositoryId: id },
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <LoadingText />;
  if (error) return <Text>Error on getting repository!</Text>;

  if (!data) return null;

  const repo = data.repository;
  const reviews = data.repository.reviews.edges;

  return(
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item.node} />}
      keyExtractor={({ node }) => node.id }
      ListHeaderComponent={() => <RepositoryInfo repo={repo} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={{ alignSelf: 'stretch' }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexGrow: 1,
    marginBottom: 10,
  },
  separator: {
    height: 10,
  },
  reviewItem: {
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  reviewRating: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  reviewRatingText: {
    fontSize: 20,
    color: theme.colors.primary,
  },
  reviewContainer: {
    paddingHorizontal: 2,
    flexShrink: 1,
    marginVertical: 10,
  },
  reviewUsername: {
    fontWeight: 'bold',
  },
  reviewDate: {
    color: 'gray',
  },
  reviewText: {
    color: theme.colors.textBlack,
  },
});

export default RepositoryPage;