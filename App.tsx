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
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/lib/integration/react';
import MainBottomTabs from './src/navigation/MainBottomTabs';
import {persister, store} from './src/store/store';

const App: React.FunctionComponent = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaView style={styles.backgroundStyle}>
        <NavigationContainer>
          <Provider store={store}>
            <PersistGate persistor={persister}>
              <MainBottomTabs />
            </PersistGate>
          </Provider>
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
