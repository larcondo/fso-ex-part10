import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useState } from 'react';

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
    .min(6, ({ min }) => `Password must be at least ${min} characters long.`)
    .required('Password is required'),
});

const SignIn = () => {
  const [errorMsg, setErrorMsg] = useState(null);
  const [signIn] = useSignIn();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signIn({ username, password });
      console.log(data.authenticate.accessToken);
      setErrorMsg(null);
    } catch (e) {
      console.log(e.message);
      setErrorMsg(e.message);
    }
  };

  return(
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signInSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} errorMessage={errorMsg} />}
      </Formik>
    </View>
  );
};

export default SignIn;