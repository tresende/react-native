import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import { theme } from '../global/styles/theme'
import WithScroll from '../hoc/WithScroll'

const { Navigator, Screen } = createStackNavigator()

const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'transparent'
        }
      }}
    >
      <Screen name="SignIn" component={WithScroll(SignIn)} />
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}

export default AuthRoutes
