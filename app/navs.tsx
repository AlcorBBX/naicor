import { createDrawerNavigator } from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Sidebar } from './components/sidebar'
import { MainScreen } from './screens/main'
import { HomeDrawerParamList, RootStackParamList } from './types/nav.types'

const Stack = createNativeStackNavigator<RootStackParamList>()
const Drawer = createDrawerNavigator<HomeDrawerParamList>()

const Home = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      screenOptions={{
        drawerType: 'back',
        swipeEdgeWidth: 200
      }}
      drawerContent={props => <Sidebar {...props} />}
    >
      <Drawer.Screen
        name="Main"
        component={MainScreen}
        options={{
          headerShown: false
        }}
      />
    </Drawer.Navigator>
  )
}

export const Navigations = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false
        }}
      />
      {/* <Stack.Screen
        name="Detail"
        component={DetailScreenForPhone}
        options={{
          headerShown: false
        }}
      /> */}
    </Stack.Navigator>
  )
}
