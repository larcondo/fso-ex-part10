import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
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
      <Link to='/' underlayColor={theme.backgroundColors.appBarLink}>
        <Text style={[styles.text, styles.button]}>Repositories</Text>
      </Link>
      <Link to='/signin' underlayColor={theme.backgroundColors.appBarLink}>
        <Text style={[styles.text, styles.button]}>Sign-in</Text>
      </Link>
    </View>
  );
};

export default AppBarTab;