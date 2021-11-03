import React from 'react';
import { Marker } from 'react-native-maps';
import { useNavigation } from '@react-navigation/core';
import MapView from 'react-native-map-clustering';

import useToilets from '../hooks/useToilets';
import { initialCamera, initialRegion } from '../utils/constants';

export const MapScreen = () => {
  const { toilets } = useToilets();
  const { navigate } = useNavigation();

  return (
    <MapView
      zoomEnabled
      style={{ flex: 1 }}
      initialCamera={initialCamera}
      initialRegion={initialRegion}
    >
      {toilets.map(toilet => (
        <Marker
          onPress={() => navigate('Details', { toilet })}
          key={toilet.gid}
          tracksViewChanges={false}
          coordinate={{
            latitude: toilet.lat,
            longitude: toilet.lon,
          }}
        />
      ))}
    </MapView>
  );
};
