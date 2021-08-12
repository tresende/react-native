import React from 'react'
import { View, Text } from 'react-native'

import Background from '../components/Background'

const WithBackground = (WrappedComponent: React.ComponentType) => {
  const Component = () => (
    <Background>
      <WrappedComponent />
    </Background>
  )
  return Component
}

export default WithBackground
