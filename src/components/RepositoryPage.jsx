import { View, Text, StyleSheet } from 'react-native';
import { useParams } from 'react-router-native';
import { useQuery } from '@apollo/client';
import { REPOSITORY_BY_ID } from '../graphql/queries';

import RepositoryItem from './RepositoryItem';
import LoadingText from './LoadingText';

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

  return(
    <View style={styles.container}>
      <RepositoryItem repo={repo} linkVisible />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexGrow: 1,
  },
});

export default RepositoryPage;