import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Colors } from '../utils/colors';
import { Units } from '../utils/units';

type Props = {
  opens: string;
  closes: string;
};

export const OpeningHours = ({ opens, closes }: Props) => (
  <View style={styles.time}>
    <Icon name="time-outline" size={20} color={Colors.tomato} />
    <Text style={{ marginLeft: Units.space }}>
      {opens} - {closes}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  time: {
    marginTop: Units.space,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
});
