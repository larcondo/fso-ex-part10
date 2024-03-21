import { View, Text, StyleSheet, Pressable } from 'react-native';
import theme from '../theme';
import { useQuery } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';
import { ME } from '../graphql/queries';

import AppBarLink from './AppBarLink';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row'
  },
  textLink: {
    padding: 10,
    color: theme.colors.textWhite,
    fontSize: 18,
    fontWeight: 'bold',
  }
});

const Button = ({ onPress, children }) => {
  return(
    <Pressable onPress={onPress}>
      { children }
    </Pressable>
  );
};

const AppBarTab = () => {
  const authStorage = useAuthStorage();
  const { data } = useQuery(ME);
  const apolloClient = useApolloClient();

  const onPressFunc = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  };

  return(
    <View style={styles.container}>
      <AppBarLink route='/' text='Repositories' />

      { data && data.me &&
        <AppBarLink route='/newreview' text='Create a review' />
      }

      { data && data.me
        ? <Button onPress={onPressFunc}>
          <Text style={[styles.textLink, { fontWeight: 'normal' }]}>Sign-out</Text>
        </Button>
        : <AppBarLink route='/signin' text='Sign-in' />
      }

      { data && !data.me && <AppBarLink route='/signup' text='Sign-up' /> }
    </View>
  );
};

export default AppBarTab;