import React from 'react'

import { View, TouchableOpacity, Text, Image, TouchableOpacityProps } from 'react-native'

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles'

type Props = TouchableOpacityProps & {
  title: string
}

const ButtonIcon = ({ title, ...rest }: Props) => (
  <TouchableOpacity style={styles.contatiner} {...rest}>
    <View style={styles.iconWrapper}>
      <Image style={styles.icon} source={DiscordImg} />
    </View>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
)

export default ButtonIcon
