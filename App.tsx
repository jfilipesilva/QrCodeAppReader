/**
 * QR Code Reader App
 * https://github.com/jfilipesilva/QrCodeAppReader
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import MainBottomTabs from './src/navigation/MainBottomTabs';

const App: React.FunctionComponent = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.backgroundStyle}>
        <NavigationContainer>
          <MainBottomTabs />
        </NavigationContainer>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    flex: 1,
  },
});

export default App;
