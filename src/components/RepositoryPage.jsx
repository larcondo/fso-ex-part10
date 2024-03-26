import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { REPOSITORY_BY_ID } from '../graphql/queries';

import RepositoryItem from './RepositoryItem';
import ReviewItem from './ReviewItem';
import ItemSeparator from './ItemSeparator';
import LoadingText from './LoadingText';

const RepositoryInfo = ({ repo }) => {
  // Repository's information implemented in the previous exercise
  return(
    <View style={styles.container}>
      <RepositoryItem repo={repo} linkVisible />
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
      ItemSeparatorComponent={<ItemSeparator />}
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
});

export default RepositoryPage;