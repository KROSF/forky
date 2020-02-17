import { createStackNavigator } from '@react-navigation/stack'
import Search from '@Screens/Search'
import React from 'react'

const Stack = createStackNavigator()

const SearchStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="search" component={Search} />
  </Stack.Navigator>
)

export default SearchStack
