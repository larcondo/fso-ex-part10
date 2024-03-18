import { View, StyleSheet } from 'react-native';
import theme from '../theme';

import AvatarImage from './AvatarImage';
import RepositoryDataPanel from './RepositoryDataPanel';
import RepositoryStatPanel from './RepositoryStatPanel';

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: theme.backgroundColors.repositoryItem,
    padding: 10,
    maxWidth: '100%',
  },
  topContainer: {
    flexDirection: 'row',
  },
});

const RepositoryItem = ({ repo }) => {
  return(
    <View style={styles.containerItem} testID='respositoryItem'>
      <View style={styles.topContainer}>
        <AvatarImage uri={repo.ownerAvatarUrl} />
        <RepositoryDataPanel repo={repo} />
      </View>
      <RepositoryStatPanel repo={repo} />
    </View>
  );
};

export default RepositoryItem;