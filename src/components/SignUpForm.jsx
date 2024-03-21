import { View, Pressable, Text, StyleSheet } from 'react-native';
import theme from '../theme';

import FormikTextInput from './FormikTextInput';

const SignUpForm = ({ onSubmit }) => {
  return(
    <View style={styles.signUpform}>
      <FormikTextInput
        name='username'
        placeholder='Username'
      />
      <FormikTextInput
        name='password'
        placeholder='Password' secureTextEntry
      />
      <FormikTextInput
        name='passwordConfirmation'
        placeholder='Password confirmation'
        secureTextEntry
      />
      <Pressable onPress={onSubmit} style={styles.submitButton}>
        <Text style={styles.submitText}>Sign up</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  signUpform: {
    padding: 10,
    backgroundColor: 'white',
  },
  submitButton: {
    backgroundColor: theme.backgroundColors.submitButton,
    borderRadius: 5,
  },
  submitText: {
    textAlign: 'center',
    color: 'white',
    paddingVertical: 14,
    fontSize: 15,
  },
});

export default SignUpForm;