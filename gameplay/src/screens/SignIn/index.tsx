import React from 'react'
import { Text, View, Image, StatusBar } from 'react-native'

import { Styles } from './styled'
import IllustrationImage from '../../assets/illustration.png'
import ButtonIcon from '../../components/ButtonIcon'

const SignIn = () => (
  <View style={Styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    <Image resizeMode="stretch" source={IllustrationImage} style={Styles.image} />
    <View style={Styles.content}>
      <Text style={Styles.title}>
        Organize {`\n`} suas jogatinas {`\n`} facilmente
      </Text>
      <Text style={Styles.subtitle}>Crie grupos para jogar games {`\n`} favoritos com amigos</Text>
      <ButtonIcon activeOpacity={0.7} title="Entrar com discord" />
    </View>
  </View>
)

export default SignIn
