import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import RepositoryList from './RepositoryList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
  },
});

const Main = () => {
  return(
    <View style={styles.container}>
      <RepositoryList />
    </View>
  );
};

export default Main;