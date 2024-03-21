import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-native';
import useNewReview from '../hooks/useNewReview';
import { useState } from 'react';
import theme from '../theme';

import FormikTextInput from './FormikTextInput';

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: '',
};

const newReviewSchema = Yup.object().shape({
  ownerName: Yup
    .string()
    .required('Repository owner name is required'),
  repositoryName: Yup
    .string()
    .required('Repository name is required'),
  rating: Yup
    .number()
    .typeError('Rating must be a number')
    .required('Rating is required')
    .min(0, 'Rating must be greater o equal to 0.')
    .max(100, 'Rating must be lower o equal to 100.')
});

const NewReview = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [newReview] = useNewReview();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    // const { ownerName, repositoryName, rating, text } = values;
    const review = newReviewSchema.cast(values);

    try {
      const { data } = await newReview({ review });
      navigate(`/repository/${data.createReview.repositoryId}`);
    } catch(e) {
      console.log(e.message);
      setErrorMessage(e.message);
      setTimeout(() => setErrorMessage(null), 2500);
    }
  };

  return(
    <View style={styles.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={newReviewSchema}
      >
        { ({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} errorMessage={errorMessage} /> }
      </Formik>
    </View>
  );
};

const ReviewForm = ({ onSubmit, errorMessage }) => {
  return(
    <View style={styles.formContainer}>
      <FormikTextInput name='ownerName' placeholder='Repository owner name' />
      <FormikTextInput name='repositoryName' placeholder='Repository name' />
      <FormikTextInput name='rating' placeholder='Rating between 0 and 100' />
      <FormikTextInput name='text' placeholder='Review' multiline />

      { errorMessage &&
        <Text style={styles.errorMessage}>{ errorMessage }</Text>
      }
      <Pressable onPress={onSubmit} style={styles.submitButton}>
        <Text style={styles.submitText}>Create a review</Text>
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignSelf: 'stretch',
    padding: 10,
  },
  formContainer: {
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
  errorMessage: {
    color: theme.colors.error,
    // textAlign: 'center',
    fontSize: 16,
    paddingVertical: 10,
  }
});

export default NewReview;