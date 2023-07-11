import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {styles} from './TextMedium.styles';
import {TextMediumProps} from './TextMedium.types';

const TextMedium: React.FunctionComponent<TextMediumProps> = props => {
  const {style} = props;

  // Uses the default style if no `style` is passed
  const mergedStyle: StyleProp<TextStyle> = style
    ? [styles.text, style]
    : styles.text;

  return (
    <Text {...props} style={mergedStyle}>
      {props.children}
    </Text>
  );
};

export default TextMedium;
