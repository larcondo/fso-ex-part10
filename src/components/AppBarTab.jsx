import { View, Text, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  button: {
    padding: 10,
  },
  text: {
    color: theme.colors.textBlack,
    fontSize: 18,
    fontWeight: 'bold',
  }
});

const AppBarTab = () => {
  return(
    <View style={styles.container}>
      <Pressable style={({ pressed }) => [
        { backgroundColor: pressed ? '#7799ff' : theme.backgroundColors.appBarButtom },
        styles.button
      ]}>
        <Text style={styles.text}>Repositories</Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;