import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MapScreen } from '../views/MapScreen';
import { ListScreen } from '../views/ListScreen';

const Tab = createBottomTabNavigator();

export const TabNavigatorStack = () => (
  <Tab.Navigator>
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="List" component={ListScreen} />
  </Tab.Navigator>
);
