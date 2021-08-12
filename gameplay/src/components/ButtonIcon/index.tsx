import React from 'react'

import { View, Text, Image } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

type Props = RectButtonProps & {
  title: string
}

const ButtonIcon = ({ title, ...rest }: Props) => (
  <RectButton style={styles.contatiner} {...rest}>
    <View style={styles.iconWrapper}>
      <Image style={styles.icon} source={DiscordImg} />
    </View>
    <Text style={styles.title}>{title}</Text>
  </RectButton>
)

export default ButtonIcon
