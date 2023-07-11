import React from 'react';
import {StatusBar, View} from 'react-native';
import Title from '../../molecules/title/Title';
import {styles} from './ScreenLayout.styles';
import {ScreenLayoutProps} from './ScreenLayout.types';

// This component Represents the main layout structure for all screens
const ScreenLayout: React.FunctionComponent<ScreenLayoutProps> = props => {
  const {title, children} = props;

  return (
    <View style={styles.mainContainer}>
      {/* It's used to customize the status bar at the top of the screen in a React Native application. */}
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
