import React from 'react';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-map-clustering';

import useToilets from '../hooks/useToilets';
import { initialCamera, initialRegion } from '../utils/constants';

export const MapScreen = () => {
  const { toilets } = useToilets();

  return (
    <MapView
      zoomEnabled
      style={{ flex: 1 }}
      initialCamera={initialCamera}
      initialRegion={initialRegion}
    >
      {toilets.map((item, index) => (
        <Marker
          key={index}
          tracksViewChanges={false}
          coordinate={{
            latitude: item.lat,
            longitude: item.lon,
          }}
        />
      ))}
    </MapView>
  );
};
