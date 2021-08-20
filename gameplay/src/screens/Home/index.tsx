import React, { useState } from 'react'
import { View, FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Appointment from '../../components/Appointment'
import ButtonAdd from '../../components/ButtonAdd'
import CategorySelect from '../../components/CategorySelect'
import ListDivider from '../../components/ListDivider'
import ListHeader from '../../components/ListHeader'
import Profile from '../../components/Profile'
import { styles } from './styles'

const Home = () => {
  const navigation = useNavigation()
  const [category, setCategory] = useState('1')

  const handleCategorySelect = (categoryId: string) => {
    const newCategory = categoryId === category ? '' : categoryId
    setCategory(newCategory)
  }

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/06 às 20:40h',
      description: 'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
    }
  ]

  const handleAppointmentDetails = () => navigation.navigate('AppointmentDetails')
  const handleAppointmentCreate = () => navigation.navigate('AppointmentCreate')

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd onPress={handleAppointmentCreate} />
      </View>
      <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
      <ListHeader title="Partidas agendadas" subtitle="Total 6" />
      <FlatList
        style={styles.matches}
        showsVerticalScrollIndicator={false}
        data={appointments}
        ItemSeparatorComponent={() => <ListDivider />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => <Appointment onPress={handleAppointmentDetails} data={item} />}
      />
    </View>
  )
}

export default Home
