import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme';
import { format } from 'date-fns';

const ReviewItem = ({ review, showRepoName = false }) => {
  // Single review item
  return(
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
  );
};

const styles = StyleSheet.create({
  reviewItem: {
    backgroundColor: 'white',
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
  }
});

export default ReviewItem;