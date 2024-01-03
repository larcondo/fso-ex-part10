import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';

import AppBarTab from './AppBarTab';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: Constants.statusBarHeight + 10,
    backgroundColor: theme.backgroundColors.appBar,
    width: '100%',
  },
});

const AppBar = () => {
  return <View style={styles.container}>
    <ScrollView horizontal>
      <AppBarTab />
    </ScrollView>
  </View>;
};

export default AppBar;