import React from 'react';
import { View, Text } from 'react-native';
import {useTailwind} from 'tailwind-rn';

const CustomerScreen = () => {
	const tw = useTailwind();

  return (
    <View>
      <Text style={tw('text-red-800 font-semibold')}>CustomerScreen</Text>
    </View>
  )
}

export default CustomerScreen;