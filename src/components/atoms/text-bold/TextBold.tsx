import React from 'react';
import {Text} from 'react-native';
import {styles} from './TextBold.styles';
import {TextBoldProps} from './TextBold.types';

const TextBold: React.FunctionComponent<TextBoldProps> = props => {
  const {style} = props;

  return (
    <Text {...props} style={[styles.text, style]}>
      {props.children}
    </Text>
  );
};

export default TextBold;
