import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type SubtitleProps = {
  textStyle?: StyleProp<TextStyle>;
  subtitleContainerStyle?: StyleProp<ViewStyle>;
  children?: string;
};
