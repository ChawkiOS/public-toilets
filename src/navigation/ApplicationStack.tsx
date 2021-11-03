import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { TabNavigatorStack } from './TabsNavigationStack';
import { DetailsScreen } from '../views/DetailsScreen';

const Stack = createStackNavigator();

export const ApplicationStackSreen = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="BottomTab">
      <Stack.Screen
        name="BottomTab"
        component={TabNavigatorStack}
        options={{ title: 'Toilettes publiques' }}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{ title: 'Détails', headerBackTitleVisible: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
);
