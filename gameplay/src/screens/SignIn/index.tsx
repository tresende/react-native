import React from 'react'
import { Text, View, Image } from 'react-native'

import { styles } from './styles'
import IllustrationImage from '../../assets/illustration.png'
import ButtonIcon from '../../components/ButtonIcon'

const SignIn = () => (
  <View style={styles.container}>
    <Image resizeMode="stretch" source={IllustrationImage} style={styles.image} />
    <View style={styles.content}>
      <Text style={styles.title}>
        Connect-se {'\n'}e organize suas jogatinas {'\n'}
      </Text>
      <Text style={styles.subtitle}>Crie grupos para jogar games {'\n'} favoritos com amigos</Text>
      <ButtonIcon activeOpacity={0.7} title="Entrar com discord" />
    </View>
  </View>
)

export default SignIn
