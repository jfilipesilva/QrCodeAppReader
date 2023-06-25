import React from 'react';
import {View} from 'react-native';
import TextBold from '../../atoms/text-bold/TextBold';
import {styles} from './Title.styles';
import {TitleProps} from './Title.types';

const Title: React.FunctionComponent<TitleProps> = props => {
  const {textStyle, titleContainerStyle} = props;
  return (
    <View style={[styles.mainContainer, titleContainerStyle]}>
      <TextBold style={[styles.title, textStyle]}>{props.children}</TextBold>
    </View>
  );
};

export default Title;
