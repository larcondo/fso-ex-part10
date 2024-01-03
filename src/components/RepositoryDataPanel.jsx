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
      <Text fontWeight='bold' fontSize='subheading'>{ repo.fullName }</Text>
      <Text style={styles.description} color='textSecondary'>{ repo.description }</Text>
      <Text style={styles.language}>{ repo.language }</Text>
    </View>
  );
};

export default RepositoryDataPanel;