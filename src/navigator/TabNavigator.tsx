import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import CustomerScreen from '../screens/customer/CustomerScreen';
import OrdersScreen from '../screens/order/OrdersScreen';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Customers' component={CustomerScreen} />
      <Tab.Screen name='Orders' component={OrdersScreen} />
    </Tab.Navigator>
  )
}

export default TabNavigator;