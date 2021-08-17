import React from 'react'
import { View, FlatList } from 'react-native'
import { GuildModel } from '../../components/Appointment'
import Guild from '../../components/Guild'
import ListDivider from '../../components/ListDivider'

import { styles } from './styles'

type Props = {
  handleGuildSelected: (model: GuildModel) => void
}

const Guilds = ({ handleGuildSelected }: Props) => {
  const guilds: GuildModel[] = [
    {
      id: '1',
      name: 'Lendários',
      icon: 'image.png',
      owner: true
    },
    {
      id: '2',
      name: 'Galera do Game',
      icon: 'image.png',
      owner: true
    }
  ]

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.guilds}
        data={guilds}
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider />}
        renderItem={({ item }) => <Guild data={item} onPress={() => handleGuildSelected(item)} />}
      />
    </View>
  )
}

export default Guilds
