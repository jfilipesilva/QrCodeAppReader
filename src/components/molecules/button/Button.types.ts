import {StyleProp, TextStyle, ViewStyle} from 'react-native';

/**
 * Props for the button component.
 * @property {StyleProp<TextStyle>} textStyle - it's used to define the style of the text inside the button
 * @property {StyleProp<ViewStyle>} buttonContainerStyle - It's used to define the style of the container view that wraps the button
 * @property {string} children - The `children` property is used to define the text of the button.
 * @property {() => void} onPress - This property is a function that will be called when the button is pressed.
 */
export type ButtonProps = {
  textStyle?: StyleProp<TextStyle>;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  children?: string;
  onPress?: () => void;
};
