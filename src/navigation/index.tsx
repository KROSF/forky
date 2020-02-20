import { NavigationContainer } from '@react-navigation/native'
import { navigationTheme } from '@Utils/theme'
import React from 'react'
import TabNavigation from './tabs'

export default () => {
  return (
    <NavigationContainer theme={navigationTheme}>
      <TabNavigation />
    </NavigationContainer>
  )
}
