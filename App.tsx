import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { TailwindProvider } from 'tailwind-rn';
import RootNavigator from './src/navigator/RootNavigator';
import utilities from './tailwind.json';

export default function App() {
  return (
    // @ts-ignore - TailwindProvider is a missing type definition
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        {/* <SafeAreaView>
          <StatusBar style='light' translucent={false} />
          <CustomScreen />
        </SafeAreaView> */}
        <RootNavigator />
      </NavigationContainer>
    </TailwindProvider>
  );
}

