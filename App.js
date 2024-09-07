import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import FishListScreen from './screens/FishListScreen';
import FishDetailScreen from './screens/FishDetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'หน้าหลัก' }} />
        <Stack.Screen name="FishList" component={FishListScreen} options={{ title: 'รายชื่อปลา' }} />
        <Stack.Screen name="FishDetail" component={FishDetailScreen} options={{ title: 'รายละเอียดปลา' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}