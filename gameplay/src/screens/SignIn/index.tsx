import React from 'react'
import { Text, View, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { styles } from './styles'
import IllustrationImage from '../../assets/illustration.png'
import ButtonIcon from '../../components/ButtonIcon'
import { useAuth } from '../../hooks/auth'
import { Alert } from 'react-native'

const SignIn = () => {
  const { user, signIn } = useAuth()
  const navigation = useNavigation()

  const handleSignIn = async () => {
    try {
      const response = await signIn()
      console.log(response)
    } catch (error) {
      console.log(error)
      Alert.alert(error)
    }

    //navigation.navigate('Home')
  }

  return (
    <View style={styles.container}>
      <Image resizeMode="stretch" source={IllustrationImage} style={styles.image} />
      <View style={styles.content}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title}>
            Connect-se {'\n'}e organize suas jogatinas {'\n'}
          </Text>
          <Text style={styles.subtitle}>Crie grupos para jogar games {'\n'} favoritos com amigos</Text>
        </View>
        <View style={styles.footer}>
          <ButtonIcon onPress={handleSignIn} title="Entrar com discord" />
        </View>
      </View>
    </View>
  )
}

export default SignIn
