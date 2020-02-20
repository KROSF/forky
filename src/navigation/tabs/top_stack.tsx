import { createStackNavigator } from '@react-navigation/stack'
import TopRestaurants from '@Screens/TopRestaurants'
import React from 'react'

const Stack = createStackNavigator()

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="top-restaurants" component={TopRestaurants} />
  </Stack.Navigator>
)
