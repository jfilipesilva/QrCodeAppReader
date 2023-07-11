import {StyleProp, TextStyle, ViewStyle} from 'react-native';

/**
 * Props for the title component
 * @property {StyleProp<TextStyle>} textStyle - It's used to apply custom styles to the text component
 * @property {StyleProp<ViewStyle>} titleContainerStyle - It's used to define the style of the container that wraps the title component
 * @property {string} children - It's used to pass the value for the title has a string
 */
export type TitleProps = {
  textStyle?: StyleProp<TextStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  children?: string;
};
