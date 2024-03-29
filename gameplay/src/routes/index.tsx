import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import AuthRoutes from './auth.routes'

const Routes = () => (
  <NavigationContainer>
    <AuthRoutes />
  </NavigationContainer>
)
export default Routes
