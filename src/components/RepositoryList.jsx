import { FlatList, View, StyleSheet, Text } from 'react-native';
import RepositoryItem from './RepositoryItem';
import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  basicText: {
    backgroundColor: 'white',
    paddingVertical: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const LoadingText = () => {
  return <Text style={styles.basicText}>loading...</Text>;
};

const ErrorText = ({ message }) => {
  const errorStyle = [styles.basicText, { color: 'red' }];

  return(
    <Text style={errorStyle}>
      { `Error! ${message}` }
    </Text>
  );
};

const RepositoryList = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  if (loading) return <LoadingText />;
  if (error) return <ErrorText message={error.message} />;

  // Get the nodes from the edges array
  const repositoryNodes = data
    ? data.repositories.edges.map( edge => edge.node )
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <RepositoryItem repo={item} />}
      keyExtractor={item => item.id}
    />
  );
};

export default RepositoryList;