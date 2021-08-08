import React from 'react'
import { View, Text } from 'react-native'
import Profile from '../../components/Profile'

import { styles } from './styles'

const Home = () => (
  <View style={styles.container}>
    <View style={styles.header}>
      <Profile />
    </View>
  </View>
)

export default Home
