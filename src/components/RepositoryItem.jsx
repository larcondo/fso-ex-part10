import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  containerItem: {
    padding: 10,
  }
});

const RepositoryItem = ({ repo }) => {
  return(
    <View style={styles.containerItem}>
      <Text>Full name: { repo.fullName }</Text>
      <Text>Description: { repo.description }</Text>
      <Text>Language: { repo.language }</Text>
      <Text>Stars: { repo.stargazerCount }</Text>
      <Text>Forks: { repo.forksCount }</Text>
      <Text>Reviews: { repo.reviewCount }</Text>
      <Text>Rating: { repo.ratingAverage }</Text>
    </View>
  );
};

export default RepositoryItem;