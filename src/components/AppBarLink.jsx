import { Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../theme';

const styles = StyleSheet.create({
  textLink: {
    padding: 10,
    color: theme.colors.textWhite,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const AppBarLink = ({ route, text }) => {
  return(
    <Link to={route} underlayColor={theme.backgroundColors.appBarLink}>
      <Text style={styles.textLink}>
        { text }
      </Text>
    </Link>
  );
};

export default AppBarLink;