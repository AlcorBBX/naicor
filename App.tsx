import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import { Navigations } from './app/navs'

export default function App() {
  return (
    <NavigationContainer>
      {/* <ThemeProvider></ThemeProvider> */}
      {/* <View className="flex-1 items-center justify-center bg-white"> */}
        <Navigations />
      {/* </View> */}
    </NavigationContainer>
  )
}
