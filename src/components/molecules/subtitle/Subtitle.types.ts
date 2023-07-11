import {StyleProp, TextStyle, ViewStyle} from 'react-native';

/**
 * Props for the subtitle component
 * @property {StyleProp<TextStyle>} textStyle - It's used to apply custom styles to the subtitle text.
 * @property {StyleProp<ViewStyle>} subtitleContainerStyle - It's used to apply custom styles to the container of the subtitle component
 * @property {string} children - Property to pass the subtitle text as a string
 */
export type SubtitleProps = {
  textStyle?: StyleProp<TextStyle>;
  subtitleContainerStyle?: StyleProp<ViewStyle>;
  children?: string;
};
