import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import AccountStack from './account_stack'
import RestaurantsStack from './restaurants_stack'
import SearchStack from './search_stack'
import { BottomTabs } from './tabs'
import TopStack from './top_stack'

const Tab = createBottomTabNavigator<BottomTabs>()

const TabNavigation = () => (
  <Tab.Navigator initialRouteName="Restaurants">
    <Tab.Screen
      name="Restaurants"
      component={RestaurantsStack}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="compass-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Top"
      component={TopStack}
      options={{
        title: 'Top List',
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="star-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Search"
      component={SearchStack}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="magnify" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={AccountStack}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="account-outline"
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
)

export default TabNavigation
