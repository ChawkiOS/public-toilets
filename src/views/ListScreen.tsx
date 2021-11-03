import React from 'react';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { ListItem, Separator } from '../components';
import { Units } from '../utils/units';
import useToilets from '../hooks/useToilets';

export const ListScreen = () => {
  const { toilets } = useToilets();
  const { navigate } = useNavigation();

  return (
    <FlatList
      data={toilets}
      style={{ padding: Units.space }}
      keyExtractor={({ gid }) => gid.toString()}
      ItemSeparatorComponent={() => <Separator />}
      renderItem={({ item: toilet }) => (
        <ListItem
          toilet={toilet}
          onPress={() => navigate('Details', { toilet })}
        />
      )}
    />
  );
};
