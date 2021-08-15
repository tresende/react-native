import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import SignIn from '../screens/SignIn'
import AppointmentDetails from '../screens/AppointmentDetails'
import WithScroll from '../hoc/WithScroll'
import WithBackground from '../hoc/WithBackground'

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
      <Screen name="Home" component={WithBackground(Home)} />
      <Screen name="AppointmentDetails" component={WithScroll(AppointmentDetails)} />
    </Navigator>
  )
}

export default AuthRoutes
