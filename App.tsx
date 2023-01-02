import { NavigationContainer } from '@react-navigation/native'
import { ThemeProvider } from '@shopify/restyle'
import { StatusBar } from 'react-native'
import { Navigations } from './app/navs'
import light from './app/themes/light'

export default function App() {
  return (
    <NavigationContainer>
      <ThemeProvider theme={light}>
        <StatusBar/>
        <Navigations />
      </ThemeProvider>
    </NavigationContainer>
  )
}
