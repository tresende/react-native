import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import Background from '../components/Background'
import WithBackground from './WithBackground'

const WithScroll = (WrappedComponent: React.ComponentType) => {
  const Component = WithBackground(() => (
    <Background>
      <ScrollView>
        <WrappedComponent />
      </ScrollView>
    </Background>
  ))
  return Component
}

export default WithScroll
