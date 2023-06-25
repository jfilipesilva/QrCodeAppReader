import React from 'react';
import {Text} from 'react-native';
import {styles} from './TextMedium.styles';
import {TextMediumProps} from './TextMedium.types';

const TextMedium: React.FunctionComponent<TextMediumProps> = props => {
  const {style, onLayout} = props;

  return (
    <Text onLayout={onLayout} style={[styles.text, style]}>
      {props.children}
    </Text>
  );
};

export default TextMedium;
