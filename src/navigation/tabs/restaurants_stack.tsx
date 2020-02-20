import { createStackNavigator } from '@react-navigation/stack'
import Restaurants from '@Screens/Restaurants'
import React from 'react'
import { RestaurantsStackParamList } from './tabs'

const Stack = createStackNavigator<RestaurantsStackParamList>()

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Restaurants" component={Restaurants} />
  </Stack.Navigator>
)
