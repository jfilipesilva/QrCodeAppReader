import React from 'react';
import {Text} from 'react-native';
import {styles} from './TextRegular.styles';
import {TextRegularProps} from './TextRegular.types';

const TextRegular: React.FunctionComponent<TextRegularProps> = props => {
  const {style} = props;

  return (
    <Text {...props} style={[styles.text, style]}>
      {props.children}
    </Text>
  );
};

export default TextRegular;
