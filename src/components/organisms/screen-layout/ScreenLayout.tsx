import React from 'react';
import {StatusBar, View} from 'react-native';
import Title from '../../molecules/title/Title';
import {styles} from './ScreenLayout.styles';
import {ScreenLayoutProps} from './ScreenLayout.types';

const ScreenLayout: React.FunctionComponent<ScreenLayoutProps> = props => {
  const {title, children} = props;

  return (
    <View style={styles.mainContainer}>
      <StatusBar
        backgroundColor={'transparent'}
        barStyle={'dark-content'}
        translucent={true}
      />
      <View style={styles.titleContainer}>
        <Title textStyle={styles.titleText}>{title}</Title>
      </View>
      {children}
    </View>
  );
};

export default ScreenLayout;
