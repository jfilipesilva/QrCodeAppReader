import {StyleSheet, TextStyle} from 'react-native';

export const fonts = {
  // FONT FAMILY
  FONT_FAMILY_BOLD: '',
  FONT_FAMILY_MEDIUM: '',
  FONT_FAMILY_REGULAR: '',

  // FONT WEIGHT
  FONT_WEIGHT_BOLD: '600' as TextStyle['fontWeight'],
  FONT_WEIGHT_MEDIUM: '500' as TextStyle['fontWeight'],
  FONT_WEIGHT_REGULAR: '400' as TextStyle['fontWeight'],
};

export const fontStyle = StyleSheet.create({
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 25,
  },
  button: {
    fontSize: 20,
    lineHeight: 23,
  },
  body: {
    fontSize: 20,
    lineHeight: 23,
  },
  caption: {
    fontSize: 15,
  },
});
