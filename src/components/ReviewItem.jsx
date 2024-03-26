import { View, Text, StyleSheet, Pressable, Alert } from 'react-native';
import { Link } from 'react-router-native';
import theme from '../theme';
import { format } from 'date-fns';
import { useMutation } from '@apollo/client';
import { DELETE_REVIEW } from '../graphql/mutations';

const ReviewItem = ({ review, showRepoName = false, refetch }) => {
  // Single review item
  const [deleteRev] = useMutation(DELETE_REVIEW);

  const deleteFn = async () => {
    const { data } = await deleteRev({
      variables: { deleteReviewId: review.id }
    });

    if (data?.deleteReview) {
      refetch();
    }
  };

  const showAlert = () => {
    Alert.alert(
      'Delete review',
      'Are you sure you want to delete this review?',
      [
        { text: 'CANCEL', style: 'cancel' },
        { text: 'DELETE', style: 'cancel', onPress: deleteFn },
      ]
    );
  };

  return(
    <View style={styles.container}>
      <View style={styles.reviewItem}>
        <View style={styles.reviewRating}>
          <Text style={styles.reviewRatingText}>
            { review.rating }
          </Text>
        </View>
        <View style={styles.reviewContainer}>
          { showRepoName
            ? <Text style={styles.reviewFullName}>{ review.repository.fullName }</Text>:
            <Text style={styles.reviewUsername}>{ review.user.username }</Text>
          }
          <Text style={styles.reviewDate}>{ format(new Date(review.createdAt), 'dd.MM.yyyy') }</Text>
          <Text style={styles.reviewText}>{ review.text }</Text>
        </View>
      </View>
      { showRepoName &&
        <View style={styles.buttonsContainer}>
          <Link to={`/repository/${review.repositoryId}`} style={[styles.button, { backgroundColor: '#0165D4' }]} underlayColor={'#0165D4'}>
            <Text style={styles.buttonText}>View repository</Text>
          </Link>
          <Pressable onPress={showAlert} style={[ styles.button, { backgroundColor: '#D6394C' }]}>
            <Text style={styles.buttonText}>Delete review</Text>
          </Pressable>
        </View>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
  },
  reviewItem: {
    flexDirection: 'row',
  },
  reviewRating: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
  },
  reviewRatingText: {
    fontSize: 20,
    color: theme.colors.primary,
  },
  reviewContainer: {
    paddingHorizontal: 2,
    flexShrink: 1,
    marginVertical: 10,
  },
  reviewUsername: {
    fontWeight: 'bold',
  },
  reviewDate: {
    color: 'gray',
  },
  reviewText: {
    color: theme.colors.textBlack,
  },
  reviewFullName: {
    fontWeight: 'bold',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    gap: 20,
    paddingHorizontal: 20,
    marginBottom: 10,
    marginTop: 5,
  },
  button: {
    flexGrow: 1,
    paddingVertical: 10,
    borderRadius: 4,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ReviewItem;