import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HistoryScreen from '../screens/HistoryScreen/HistoryScreen';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import {colors} from '../theme/colors';
import styles from './MainBottomTabs.style';

const MainBottomTabs: React.FunctionComponent = () => {
  const Tab = createMaterialBottomTabNavigator();

  const getTabBarIcon = (iconName: string, focused: boolean) => (
    <FontAwesome
      name={iconName}
      size={26}
      color={focused ? 'black' : 'white'}
    />
  );

  return (
    <Tab.Navigator
      activeColor={colors.TEXT_WHITE}
      barStyle={styles.tabBar}
      shifting>
      <Tab.Screen
        name="Scan"
        component={HomeScreen}
        options={{
          tabBarIcon: props => getTabBarIcon('qrcode', props.focused),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: props => getTabBarIcon('history', props.focused),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainBottomTabs;
