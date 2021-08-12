import React from 'react'
import { View, Text } from 'react-native'

import Avatar from '../Avatar'
import { styles } from './styles'

const Profile = () => (
  <View style={styles.container}>
    <Avatar urlImage="https://github.com/tresende.png" />
    <View>
      <View style={styles.user}>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.username}>Thiago</Text>
      </View>
      <Text style={styles.message}>Hoje é dia de vitória</Text>
    </View>
  </View>
)

export default Profile
