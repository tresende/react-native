import React from 'react'
import { ScrollView, StatusBar } from 'react-native'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'

import SignIn from './src/screens/SignIn'
import Background from './src/components/Background'

const App = () => {
  const [fontsLoaded] = useFonts({
    Rajdhani_500Medium,
    Rajdhani_700Bold,
    Inter_400Regular,
    Inter_500Medium
  })
  if (!fontsLoaded) return <AppLoading />

  return (
    <Background>
      <ScrollView>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <SignIn />
      </ScrollView>
    </Background>
  )
}

export default App
