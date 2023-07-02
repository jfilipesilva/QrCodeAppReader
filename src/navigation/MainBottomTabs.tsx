import {BottomSheetModalMethods} from '@gorhom/bottom-sheet/lib/typescript/types';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React, {Ref, createContext, useRef} from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HistoryScreen from '../screens/HistoryScreen/HistoryScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {CommonTabsContextType} from './MainBottomTabs.types';

export const CommonTabsContext = createContext<CommonTabsContextType>({
  bottomSheetModalRef: {} as Ref<BottomSheetModalMethods>,
});

const MainBottomTabs: React.FunctionComponent = () => {
  const Tab = createMaterialBottomTabNavigator();

  const getTabBarIcon = (iconName: string) => (
    <FontAwesome name={iconName} size={26} />
  );

  const contextValue = {
    bottomSheetModalRef: useRef<BottomSheetModalMethods>(null),
  };

  return (
    <CommonTabsContext.Provider value={contextValue}>
      <Tab.Navigator>
        <Tab.Screen
          name="Scan"
          component={HomeScreen}
          options={{
            tabBarIcon: () => getTabBarIcon('qrcode'),
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarIcon: () => getTabBarIcon('history'),
          }}
        />
      </Tab.Navigator>
    </CommonTabsContext.Provider>
  );
};

export default MainBottomTabs;
