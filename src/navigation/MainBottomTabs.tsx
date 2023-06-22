import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import React from 'react';
import HistoryScreen from '../screens/HistoryScreen/HistoryScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

const MainBottomTabs: React.FunctionComponent = () => {
  const Tab = createMaterialBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="History" component={HistoryScreen} />
    </Tab.Navigator>
  );
};

export default MainBottomTabs;
