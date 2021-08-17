import React, { useState } from 'react'
import { View, Text, ScrollView, Platform, KeyboardAvoidingView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

import { styles } from './styles'
import Guilds from '../Guilds'
import Button from '../../components/Button'
import Header from '../../components/Header'
import Textarea from '../../components/Textarea'
import { theme } from '../../global/styles/theme'
import ModalView from '../../components/ModalView'
import GuildIcon from '../../components/GuildIcon'
import SmallInput from '../../components/SmallInput'
import CategorySelect from '../../components/CategorySelect'
import { GuildModel } from '../../components/Appointment'

const AppointmentCreate = () => {
  const [category, setCategory] = useState('1')
  const [guild, setGuild] = useState<GuildModel>({} as GuildModel)
  const [openGuildModal, setOpenGuildModal] = useState(false)

  const openModal = () => setOpenGuildModal(true)

  const handleGuildSelected = (guildSelected: GuildModel) => {
    console.log(guildSelected)
    setGuild(guildSelected)
    setOpenGuildModal(false)
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <Header title="Agendar Partida" />
        <Text
          style={[
            styles.label,
            {
              marginLeft: 24,
              marginTop: 16,
              marginBottom: 16
            }
          ]}
        >
          Categoria
        </Text>
        <CategorySelect hasCheckbox setCategory={setCategory} categorySelected={category} />
        <View style={styles.form}>
          <RectButton onPress={openModal}>
            <View style={styles.select}>
              {guild.name ? <GuildIcon /> : <View style={styles.image} />}
              <View style={styles.selectBody}>
                <Text style={styles.label}>{guild.name ?? 'Selecione um servidor'}</Text>
              </View>
              <Feather name="chevron-right" color={theme.colors.heading} size={20} />
            </View>
          </RectButton>
          <View style={styles.field}>
            <View>
              <Text style={styles.label}>Dia e mês</Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>/</Text>
                <SmallInput maxLength={2} />
              </View>
            </View>
            <View>
              <Text style={styles.label}>Hora e minuto</Text>
              <View style={styles.column}>
                <SmallInput maxLength={2} />
                <Text style={styles.divider}>:</Text>
                <SmallInput maxLength={2} />
              </View>
            </View>
          </View>
          <View
            style={[
              styles.field,
              {
                marginBottom: 12
              }
            ]}
          >
            <Text style={styles.label}>Descirção</Text>
            <Text style={styles.caractersLimit}>Max 100 Caracteres</Text>
          </View>
          <Textarea multiline maxLength={100} numberOfLines={5} />
          <View style={styles.footer}>
            <Button title="Agendar" />
          </View>
        </View>
      </ScrollView>
      <ModalView visible={openGuildModal}>
        <Guilds handleGuildSelected={handleGuildSelected} />
      </ModalView>
    </KeyboardAvoidingView>
  )
}

export default AppointmentCreate
