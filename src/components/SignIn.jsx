import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import SignInForm from './SignInForm';

const initialValues = { username: '', password: '' };

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignSelf: 'stretch'
  },
});

const signInSchema = Yup.object().shape({
  username: Yup
    .string()
    .min(3, ({ min }) => `Username must be at least ${min} characters long.`)
    .required('Username is required'),
  password: Yup
    .string()
    .min(6, ({ min }) => `Passwordñ must be at least ${min} characters long.`)
    .required('Password is required'),
});

const SignIn = () => {
  const onSubmit = (values) => console.log('Sign.in', values);

  return(
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signInSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;