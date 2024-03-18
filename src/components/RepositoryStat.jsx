import { View, StyleSheet } from 'react-native';
import theme from '../theme';

import Text from './Text';

const styles = StyleSheet.create({
  statValue: {
    textAlign: 'center',
    color: theme.colors.statValue,
  },
  statText: {
    textAlign: 'center',
    fontSize: 13,
  }
});

export const formatStatValue = (val) => {
  switch(true) {
  case val > 999 && val < 1000000:
    // return (val / 1000).toFixed(1) + 'k';
    return Math.floor((val / 1000) * 10) / 10 + 'k';
  case val > 999999:
    // return (val / 1000000).toFixed(1) + 'M';
    return Math.floor((val / 1000000) * 10) / 10 + 'M';
  default:
    return val;
  }
};

const RepositoryStat = ({ text, value, testId }) => {
  return(
    <View testID={testId}>
      <Text style={styles.statValue} fontWeight='bold'>{ formatStatValue(value) }</Text>
      <Text style={styles.statText} color='textSecondary'>{ text }</Text>
    </View>
  );
};

export default RepositoryStat;