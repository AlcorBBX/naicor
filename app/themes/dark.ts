import { createTheme } from "@shopify/restyle"
import { StatusBarStyle } from "react-native"
import light, {Theme} from './light'

const palette = {
  slate00: '#1b1c1d',
  slate10: '#202225',
  slate20: '#292c2f',
  slate30: '#2e3235',
  slate40: '#35393d',
  slate100: '#767577',
  slate900: '#dddddd',
  blue70: '#2185d0'
}

export const theme: Theme = createTheme({
  ...light,
  colors: {
    ...light.colors,
    $primary: palette.blue70,
    $secondary: palette.slate00,
    $windowBackground: palette.slate10,
    $background: palette.slate10,
    $foreground: palette.slate900,
    $separator: palette.slate100,
    $navbarBackground: palette.slate20,
    $navbarBorderBottom: palette.slate00,
    $headerBarBackground: palette.slate40,
    $sidebarBackground: palette.slate30,
    $sidebarForeground: palette.slate900,
    $sidebarSeparator: palette.slate900 + '20',
    $fieldInputBackground: palette.slate00,
    $fieldInputPlaceholderTextColor: palette.slate100
  },
  statusBar: {
    barStyle: 'light-content' as StatusBarStyle
  },
  textVariants: {
    ...light.textVariants
  },
  barVariants: {
    headerBar: {
      bg: '$headerBarBackground',
      borderRadius: 'hg',
      shadowColor: 'black',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 8
    }
  }
})

export default theme