import { View, Pressable, StyleSheet } from 'react-native';
import theme from '../theme';

import Text from './Text';
import FormikTextInput from './FormikTextInput';

const styles = StyleSheet.create({
  formContainer:{
    backgroundColor: '#fff',
    padding: 10,
    gap: 10,
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
  }
});

const SignInForm = ({ onSubmit }) => {
  return(
    <View style={styles.formContainer}>
      <FormikTextInput name='username' placeholder='Username' />
      <FormikTextInput name='password' placeholder='Password' secureTextEntry={true} />
      <Pressable onPress={onSubmit} style={styles.submitButton}>
        <Text style={styles.submitText} fontWeight='bold'>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;