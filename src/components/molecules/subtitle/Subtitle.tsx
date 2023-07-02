import React from 'react';
import {View} from 'react-native';
import TextBold from '../../atoms/text-bold/TextBold';
import {styles} from './Subtitle.styles';
import {SubtitleProps} from './Subtitle.types';

const Subtitle: React.FunctionComponent<SubtitleProps> = props => {
  const {textStyle, subtitleContainerStyle} = props;

  const mergedStyle = textStyle
    ? [styles.subtitle, textStyle]
    : styles.subtitle;

  return (
    <View style={subtitleContainerStyle} testID="subtitle-container">
      <TextBold style={mergedStyle}>{props.children}</TextBold>
    </View>
  );
};

export default Subtitle;
