import { StackNavigationProp } from '@react-navigation/stack'

export type RestaurantsStackParamList = {
  Restaurants: undefined
  Login: undefined
}

export type RestaurantsNavigationProp = StackNavigationProp<
  RestaurantsStackParamList,
  'Restaurants'
>

export type AccountStackParamList = {
  Account: undefined
  Login: undefined
  Register: undefined
}

export type AccountNavigationProp = StackNavigationProp<
  AccountStackParamList,
  'Account'
>

export type SearchStackParamList = {
  Search: undefined
}

export type SearchNavigationProp = StackNavigationProp<
  SearchStackParamList,
  'Search'
>

export type BottomTabs = {
  Restaurants: undefined
  Account: undefined
  Search: undefined
  Top: undefined
}
