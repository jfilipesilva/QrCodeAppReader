import React from 'react';
import {View} from 'react-native';
import TextBold from '../../atoms/text-bold/TextBold';
import {styles} from './Subtitle.styles';
import {SubtitleProps} from './Subtitle.types';

const Subtitle: React.FunctionComponent<SubtitleProps> = props => {
  const {textStyle, subtitleContainerStyle} = props;
  return (
    <View style={subtitleContainerStyle}>
      <TextBold style={[styles.subtitle, textStyle]}>{props.children}</TextBold>
    </View>
  );
};

export default Subtitle;
