/**
 * QR Code Reader App
 * https://github.com/jfilipesilva/QrCodeAppReader
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import MainBottomTabs from './src/navigation/MainBottomTabs';

const App: React.FunctionComponent = () => {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <NavigationContainer>
        <MainBottomTabs />
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});

export default App;
