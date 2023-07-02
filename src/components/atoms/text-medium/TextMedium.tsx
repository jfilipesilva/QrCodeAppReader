import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';
import {styles} from './TextMedium.styles';
import {TextMediumProps} from './TextMedium.types';

const TextMedium: React.FunctionComponent<TextMediumProps> = props => {
  const {style, onLayout} = props;

  const mergedStyle: StyleProp<TextStyle> = style
    ? [styles.text, style]
    : styles.text;

  return (
    <Text {...props} onLayout={onLayout} style={mergedStyle}>
      {props.children}
    </Text>
  );
};

export default TextMedium;
