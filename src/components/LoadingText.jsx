import { View, Text, StyleSheet } from 'react-native';

const LoadingText = () => {
  return(
    <View style={styles.loadingContainer}>
      <Text style={[styles.basicText, styles.loadingText]}>loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  basicText: {
    backgroundColor: 'white',
    paddingVertical: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  loadingContainer: {
    width: '100%',
    flexGrow: 1,
    alignSelf: 'stretch',
  },
  loadingText: {
    flexGrow: 1,
  },
});

export default LoadingText;