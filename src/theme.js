import { Platform } from 'react-native';

const theme = {
  backgroundColors: {
    appBar: '#88aaff',
    appBarButtom: '#88aaff',
    appBarLink: '#7996E0',
    main: '#e1e4e8',
    repositoryItem: '#ffffff',
    submitButton: '#0366d6',
  },
  colors: {
    primary: '#0366d6',
    textPrimary: '#24292e',
    textSecondary: '#586069',
    textBlack: '#1c1c1c',
    textWhite: '#ffffff',
    statValue: '#1c1c1c',
    statText: '#888888',
    error: '#d73a4a',
  },
  avatarImage: {
    size: 55,
  },
  fontSizes: {
    body: 14,
    subheading: 16,
  },
  fonts: {
    main: Platform.select({
      android: 'Roboto',
      ios: 'Arial',
      default: 'System',
    }),
  },
  fontWeights: {
    normal: '400',
    bold: '700',
  },
};

export default theme;