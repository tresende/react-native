import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'
import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'

import GuildIcon from '../GuildIcon'
import { categories } from '../../utils/categories'
import { theme } from '../../global/styles/theme'

export type GuildModel = {
  id: string
  name: string
  icon?: string
  owner: boolean
}

export type AppointmentProps = {
  id: string
  guild: GuildModel
  category: string
  date: string
  description: string
}

type Props = RectButtonProps & {
  data: AppointmentProps
}
const Appointment = ({ data, ...rest }: Props) => {
  const category = categories.find((item) => item.id === data.category)
  const { primary, on, secondary50, secondary70 } = theme.colors

  const { owner } = data.guild
  const color = owner ? primary : on
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <LinearGradient style={styles.guildIconContainer} colors={[secondary50, secondary70]}>
          <GuildIcon />
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{data.guild.name}</Text>
            <Text style={styles.category}>{category?.title}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg fill={color} />
              <Text style={styles.date}>{data.date}</Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSvg fill={color} />
              <Text style={{ color }}>{owner ? 'Afitrião' : 'Visitante'}</Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  )
}

export default Appointment
