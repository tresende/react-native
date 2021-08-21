import React from 'react'
import { ImageBackground, View, Text, FlatList, SafeAreaView } from 'react-native'
import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'

import Header from '../../components/Header'
import Banner from '../../assets/banner.png'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import ListHeader from '../../components/ListHeader'
import Member from '../../components/Member'
import ListDivider from '../../components/ListDivider'
import ButtonIcon from '../../components/ButtonIcon'

const AppointmentDetails = () => {
  const members = [
    {
      id: '1',
      username: 'Thiago',
      avatar_url: 'https://github.com/tresende.png',
      status: 'online'
    },
    {
      id: '2',
      username: 'Thiago',
      avatar_url: 'https://github.com/tresende.png',
      status: 'offline'
    }
  ]
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Header
          title="Detalhes"
          action={
            <BorderlessButton>
              <Fontisto name="share" size={24} color={theme.colors.primary} />
            </BorderlessButton>
          }
        />
        <ImageBackground style={styles.banner} source={Banner}>
          <View style={styles.bannerContent}>
            <Text style={styles.title}>Lendários</Text>
            <Text style={styles.subtitle}>É hoje que vamos ao challenger sem perder uma partida da m10</Text>
          </View>
        </ImageBackground>
        <View style={styles.bannerSpace} />
        <ListHeader title="Jogadores" subtitle="Total 3" />
        <View style={styles.viewContianer}>
          <FlatList
            horizontal={false}
            data={members}
            keyExtractor={(item) => item.id}
            style={styles.members}
            ItemSeparatorComponent={() => <ListDivider />}
            renderItem={({ item }) => <Member data={item} />}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <ButtonIcon title="Entrar na partida" />
      </View>
    </View>
  )
}

export default AppointmentDetails
