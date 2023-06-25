import React from 'react';
import {View} from 'react-native';
import TextMedium from '../../atoms/text-medium/TextMedium';
import {styles} from './BodyText.styles';
import {BodyTextProps} from './BodyText.types';

const BodyText: React.FunctionComponent<BodyTextProps> = props => {
  const {textStyle, bodyTextContainerStyle} = props;
  return (
    <View style={bodyTextContainerStyle}>
      <TextMedium style={[styles.bodyText, textStyle]}>
        {props.children}
      </TextMedium>
    </View>
  );
};

export default BodyText;
