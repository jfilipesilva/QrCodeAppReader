import React from 'react';
import {StyleProp, TextStyle, View} from 'react-native';
import TextMedium from '../../atoms/text-medium/TextMedium';
import {styles} from './BodyText.styles';
import {BodyTextProps} from './BodyText.types';

const BodyText: React.FunctionComponent<BodyTextProps> = props => {
  const {textStyle, bodyTextContainerStyle} = props;

  // Uses the default style if no `textStyle` is passed
  const mergedStyle: StyleProp<TextStyle> = textStyle
    ? [styles.bodyText, textStyle]
    : styles.bodyText;

  return (
    <View style={bodyTextContainerStyle} testID="body-text-container">
      <TextMedium style={mergedStyle}>{props.children}</TextMedium>
    </View>
  );
};

export default BodyText;
