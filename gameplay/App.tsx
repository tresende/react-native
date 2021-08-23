import React from 'react'
import { StatusBar, LogBox } from 'react-native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'

import { AuthProvider } from './src/hooks/auth'
import Routes from './src/routes'

LogBox.ignoreLogs([
  'You are not currently signed in to Expo on your development machine',
  'VirtualizedLists should never be nested' // TODO: Remove when fixed
])
const App = () => {
  const [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Inter_400Regular,
    Inter_500Medium
  })
  if (!fontsLoaded) return <AppLoading />

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  )
}

export default App
