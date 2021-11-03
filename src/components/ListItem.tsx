import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { ToiletType } from '../types';
import { Colors } from '../utils/colors';
import { Units } from '../utils/units';

type Props = {
  toilet: ToiletType;
  onPress: () => void;
};

export const ListItem = ({ onPress, toilet }: Props) => (
  <TouchableOpacity onPress={onPress} style={styles.card} activeOpacity={0.5}>
    <View>
      <Text numberOfLines={2} style={{ fontSize: Units.fontSize.title }}>
        {toilet.adresse}
      </Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    padding: Units.space,
    height: Units.lHeight,
    borderRadius: Units.space,
    backgroundColor: Colors.gray,
  },
});
