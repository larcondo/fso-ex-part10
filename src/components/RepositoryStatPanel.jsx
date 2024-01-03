import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  statContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

import RepositoryStat from './RepositoryStat';

const RepositoryStatPanel = ({ repo }) => {
  return(
    <View style={styles.statContainer}>
      <RepositoryStat value={repo.stargazersCount} text='Stars' />
      <RepositoryStat value={repo.forksCount} text='Forks' />
      <RepositoryStat value={repo.reviewCount} text='Reviews' />
      <RepositoryStat value={repo.ratingAverage} text='Rating' />
    </View>
  );
};

export default RepositoryStatPanel;