import { FC } from 'react'
import { DrawerContentComponentProps } from '@react-navigation/drawer'
import { Box, Text } from '../atoms'
import { SafeAreaView } from 'react-native'

export const Sidebar: FC<DrawerContentComponentProps> = () => {
  return (
    <Box flex={1} bg="$sidebarBackground">
      <SafeAreaView>
        <Text variant="sidebar" m='lg'>sdf</Text>
      </SafeAreaView>
    </Box>
  )
}
