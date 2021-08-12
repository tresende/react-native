import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Background from '../components/Background'

const WithScroll = (WrappedComponent: React.ComponentType) => {
  const Component = () => (
    <Background>
      <ScrollView>
        <WrappedComponent />
      </ScrollView>
    </Background>
  )
  return Component
}

export default WithScroll
