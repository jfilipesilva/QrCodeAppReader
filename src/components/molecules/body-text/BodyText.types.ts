import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type BodyTextProps = {
  textStyle?: StyleProp<TextStyle>;
  bodyTextContainerStyle?: StyleProp<ViewStyle>;
  children?: string;
};
