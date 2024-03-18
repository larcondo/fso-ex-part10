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
      <RepositoryStat value={repo.stargazersCount} text='Stars' testId='stars' />
      <RepositoryStat value={repo.forksCount} text='Forks' testId='forks' />
      <RepositoryStat value={repo.reviewCount} text='Reviews' testId='reviews' />
      <RepositoryStat value={repo.ratingAverage} text='Rating' testId='rating' />
    </View>
  );
};

export default RepositoryStatPanel;