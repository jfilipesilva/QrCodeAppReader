import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type ButtonProps = {
  textStyle?: StyleProp<TextStyle>;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  children?: string;
  onPress?: () => void;
};
