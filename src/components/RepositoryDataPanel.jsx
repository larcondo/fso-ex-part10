import { View, StyleSheet } from 'react-native';
import theme from '../theme';

import Text from './Text';

const styles = StyleSheet.create({
  dataContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    padding: 10,
    paddingTop: 0,
    rowGap: 8,
  },
  description: {
    alignSelf: 'flex-start',
  },
  language: {
    color: theme.colors.textWhite,
    backgroundColor: theme.colors.primary,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
});

const RepositoryDataPanel = ({ repo }) => {
  return(
    <View style={styles.dataContainer}>
      <Text fontWeight='bold' fontSize='subheading' testID='repo-name'>{ repo.fullName }</Text>
      <Text style={styles.description} color='textSecondary' testID='repo-desc'>{ repo.description }</Text>
      <Text style={styles.language} testID='repo-lang'>{ repo.language }</Text>
    </View>
  );
};

export default RepositoryDataPanel;