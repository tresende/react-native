import React, { useState } from 'react'
import { View, Text, ScrollView, Platform, KeyboardAvoidingView } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'

import Header from '../../components/Header'
import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import CategorySelect from '../../components/CategorySelect'
import GuildIcon from '../../components/GuildIcon'
import SmallInput from '../../components/SmallInput'
import Textarea from '../../components/Textarea'

const AppointmentCreate = () => {
  const [category, setCategory] = useState('1')

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
          <RectButton>
            <View style={styles.select}>
              {<GuildIcon /> || <View style={styles.image} />}
              <View style={styles.selectBody}>
                <Text style={styles.label}>Selecione um servidor</Text>
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
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

export default AppointmentCreate
