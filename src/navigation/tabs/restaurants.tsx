import { createStackNavigator } from '@react-navigation/stack'
import Restaurants from '@Screens/Restaurants'
import React from 'react'
import { RestaurantsStackParamList } from './tabs'

const Stack = createStackNavigator<RestaurantsStackParamList>()

const RestaurantsStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Restaurants" component={Restaurants} />
  </Stack.Navigator>
)

export default RestaurantsStack
