import { Image, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  avatar: {
    width: theme.avatarImage.size,
    height: theme.avatarImage.size,
    borderRadius: 4,
    flexGrow: 0,
  },
});

const AvatarImage = ({ uri }) => {
  return(
    <Image
      style={styles.avatar}
      source={{ uri: uri }}
    />
  );
};

export default AvatarImage;