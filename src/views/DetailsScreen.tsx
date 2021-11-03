import React from 'react';
import { Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/core';

import { ToiletType } from '../types';
import { Units } from '../utils/units';
import { OpeningHours } from '../components';

type DetailsParams = {
  Params: {
    toilet: ToiletType;
  };
};

export const DetailsScreen = () => {
  const route = useRoute<RouteProp<DetailsParams, 'Params'>>();
  const { toilet } = route.params;

  return (
    <View style={{ padding: Units.space }}>
      <Text style={{ fontSize: Units.fontSize.title }}>{toilet.adresse}</Text>
      <Text>{toilet.infoloc}</Text>
      {toilet.openinghoursspecification && (
        <OpeningHours
          opens={toilet.openinghoursspecification[0].opens}
          closes={toilet.openinghoursspecification[0].closes}
        />
      )}
    </View>
  );
};
