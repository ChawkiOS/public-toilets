import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { MapScreen } from '../views/MapScreen';
import { ListScreen } from '../views/ListScreen';
import { Colors } from '../utils/colors';

const Tab = createBottomTabNavigator();

export const TabNavigatorStack = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color }) => {
        let iconName = '';

        if (route.name === 'Map') {
          iconName = focused ? 'map' : 'map-outline';
        } else {
          iconName = focused ? 'list' : 'list-outline';
        }

        return <Icon name={iconName} size={20} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: Colors.tomato,
      inactiveTintColor: Colors.gray,
    }}
  >
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="List" component={ListScreen} />
  </Tab.Navigator>
);
