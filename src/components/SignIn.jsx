import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import SignInForm from './SignInForm';

const initialValues = { username: '', password: '' };

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignSelf: 'stretch'
  },
});

const SignIn = () => {
  const onSubmit = (values) => console.log('Sign.in', values);

  return(
    <View style={styles.container}>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;