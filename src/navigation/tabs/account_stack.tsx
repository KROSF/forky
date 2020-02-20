import { createStackNavigator } from '@react-navigation/stack'
import Account from '@Screens/user/Account'
import Login from '@Screens/user/Login'
import Register from '@Screens/user/Register'
import React from 'react'
import { AccountStackParamList } from './tabs'

const Stack = createStackNavigator<AccountStackParamList>()

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={Account} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
)
