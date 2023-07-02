import React from 'react';
import {TouchableOpacity} from 'react-native';
import TextBold from '../../atoms/text-bold/TextBold';
import {styles} from './Button.styles';
import {ButtonProps} from './Button.types';

const Button: React.FunctionComponent<ButtonProps> = props => {
  const {textStyle, buttonContainerStyle, onPress, children} = props;
  return (
    <TouchableOpacity
      testID="button"
      style={[styles.button, buttonContainerStyle]}
      onPress={onPress}>
      <TextBold style={[styles.buttonText, textStyle]}>{children}</TextBold>
    </TouchableOpacity>
  );
};

export default Button;
