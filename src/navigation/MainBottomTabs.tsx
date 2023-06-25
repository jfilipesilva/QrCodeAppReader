import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HistoryScreen from '../screens/HistoryScreen/HistoryScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const MainBottomTabs: React.FunctionComponent = () => {
  const Tab = createMaterialBottomTabNavigator();

  const getTabBarIcon = (iconName: string) => (
    <FontAwesome name={iconName} size={26} />
  );

  return (
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
  );
};

export default MainBottomTabs;
