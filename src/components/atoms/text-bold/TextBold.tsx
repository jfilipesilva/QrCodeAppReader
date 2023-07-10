import React from 'react';
import {Text} from 'react-native';
import {styles} from './TextBold.styles';
import {TextBoldProps} from './TextBold.types';

const TextBold: React.FunctionComponent<TextBoldProps> = props => {
  const {style} = props;

  // Uses the default style if no `style` is passed
  const mergedStyle = style ? [styles.text, style] : styles.text;

  return (
    <Text {...props} style={mergedStyle}>
      {props.children}
    </Text>
  );
};

export default TextBold;
