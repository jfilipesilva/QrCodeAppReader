import {StyleProp, TextStyle, ViewStyle} from 'react-native';

export type TitleProps = {
  textStyle?: StyleProp<TextStyle>;
  titleContainerStyle?: StyleProp<ViewStyle>;
  children: string;
};
