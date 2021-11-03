import React from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';

import { ToiletType } from '../types';

type DetailsParams = {
  Params: {
    toilet: ToiletType;
  };
};

export const DetailsScreen = () => {
  const route = useRoute<RouteProp<DetailsParams, 'Params'>>();
  const { toilet } = route.params;

  return (
    <View>
      <Text>{toilet.adresse}</Text>
      <Text>{toilet.infoloc}</Text>
    </View>
  );
};
