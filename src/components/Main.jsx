import { View, StyleSheet } from 'react-native';
import theme from '../theme';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.backgroundColors.main,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const Main = () => {
  return(
    <View style={styles.container}>
      <AppBar />
      <RepositoryList />
    </View>
  );
};

export default Main;