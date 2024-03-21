import { View, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useSignUp from '../hooks/useSignUp';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

import SignUpForm from './SignUpForm';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    flexGrow: 1,
    padding: 10,
  },
});

const initialValues = {
  username: '',
  password: '',
  passwordConfirmation: '',
};

const signUpSchema = Yup.object().shape({
  username: Yup
    .string()
    .required('Username is required')
    .min(5, ({ min }) => `Username must be at least ${min} characters long.`)
    .max(30, ({ max }) => `Username must have a maximum of ${max} characters .`),
  password: Yup
    .string()
    .required('Password is required')
    .min(5, ({ min }) => `Password must be at least ${min} characters long.`)
    .max(50, ({ max }) => `Password must have a maximum of ${max} characters .`),
  passwordConfirmation: Yup
    .string()
    .oneOf([Yup.ref('password'), null], 'Passwords don\'t match')
    .required('Password confirmation is required'),
});

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;

    try {
      const { data } = await signUp({ username, password });
      console.log(data);
      await signIn({ username, password });
      navigate('/');
    } catch(e) {
      console.log(e.message);
    }
  };

  return(
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signUpSchema}
      >
        { ({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} /> }
      </Formik>
    </View>
  );
};

export default SignUp;