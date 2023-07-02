import React from 'react';
import {View} from 'react-native';
import TextBold from '../../atoms/text-bold/TextBold';
import {styles} from './Title.styles';
import {TitleProps} from './Title.types';

const Title: React.FunctionComponent<TitleProps> = props => {
  const {textStyle, titleContainerStyle} = props;
  const mergedStyle = titleContainerStyle
    ? [styles.mainContainer, titleContainerStyle]
    : styles.mainContainer;

  const mergedTextStyle = textStyle ? [styles.title, textStyle] : styles.title;

  return (
    <View style={mergedStyle} testID="title-container">
      <TextBold style={mergedTextStyle}>{props.children}</TextBold>
    </View>
  );
};

export default Title;
