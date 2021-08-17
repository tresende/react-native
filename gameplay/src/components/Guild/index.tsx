import React from 'react'
import { Feather } from '@expo/vector-icons'
import { View, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

import { styles } from './styles'
import GuildIcon from '../GuildIcon'
import { theme } from '../../global/styles/theme'

export type Guild = {
  id: string
  name: string
  icon: string
  owner: boolean
}

type Props = TouchableOpacityProps & {
  data: Guild
}

const Guild = ({ data, ...rest }: Props) => (
  <TouchableOpacity style={styles.container} activeOpacity={0.7} {...rest}>
    <GuildIcon />
    <View style={styles.content}>
      <View>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.type}>{data.owner ? 'Admin' : 'Convidado'}</Text>
      </View>
    </View>
    <Feather name="chevron-right" color={theme.colors.heading} size={24} />
  </TouchableOpacity>
)

export default Guild
