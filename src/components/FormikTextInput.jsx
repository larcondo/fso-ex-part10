import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import Text from './Text';
import TextInput from './TextInput';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
  },
  textInput: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#aaa',
    color: '#5c5c5c',
    paddingVertical: 6,
    paddingHorizontal: 10,
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return(
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={styles.textInput}
        {...props}
      />
      { showError && <Text style={styles.errorText}>{ meta.error }</Text>}
    </>
  );
};

export default FormikTextInput;