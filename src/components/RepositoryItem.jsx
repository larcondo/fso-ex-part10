import { View, StyleSheet, Pressable, Text } from 'react-native';
import * as Linking from 'expo-linking';
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
  linkButton: {
    paddingVertical: 12,
    marginTop: 16,
    borderRadius: 4,
  },
  linkText: {
    textAlign: 'center',
    color: theme.colors.textWhite,
    fontSize: theme.fontSizes.subheading,
    fontWeight: theme.fontWeights.bold,
  }
});

const RepositoryItem = ({ repo, linkVisible }) => {

  const openLink = () => {
    Linking.openURL(repo.url);
  };

  return(
    <View style={styles.containerItem} testID='respositoryItem'>
      <View style={styles.topContainer}>
        <AvatarImage uri={repo.ownerAvatarUrl} />
        <RepositoryDataPanel repo={repo} />
      </View>
      <RepositoryStatPanel repo={repo} />
      {
        linkVisible &&
        <Pressable style={({ pressed }) => [
          styles.linkButton, { backgroundColor: pressed ? '#035ABD' : theme.colors.primary }
        ]} onPress={openLink}>
          <Text style={styles.linkText}>Open in GitHub</Text>
        </Pressable>
      }
    </View>
  );
};

export default RepositoryItem;