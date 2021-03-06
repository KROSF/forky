import { DefaultTheme as DefaultThemeNavigation } from '@react-navigation/native'
import { DefaultTheme, Theme } from 'react-native-paper'

const colors = {
  primary: '#00a680' as '#00a680',
}
const spacing = {
  marginLeft: '40px' as '40px',
  marginRight: '40px' as '40px',
  marginTop: '20px' as '20px',
  marginBottom: '20px' as '20px',
}

export const paperTheme: Theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
}

export const styledTheme = {
  colors,
  spacing,
}

export const navigationTheme = {
  ...DefaultThemeNavigation,
  colors: {
    ...DefaultThemeNavigation.colors,
    ...colors,
  },
}
