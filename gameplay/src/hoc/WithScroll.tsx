import React from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import WithBackground from './WithBackground'

const WithScroll = (WrappedComponent: React.ComponentType) => {
  const Component = WithBackground(() => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} removeClippedSubviews={false} style={{ flexGrow: 1 }}>
      <View style={{ flex: 1 }}>
        <WrappedComponent />
      </View>
    </ScrollView>
  ))
  return WithBackground(Component)
}

export default WithScroll
