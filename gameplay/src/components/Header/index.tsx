import React from 'react'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { BorderlessButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'
import { theme } from '../../global/styles/theme'
import { styles } from './styles'
import { useNavigation } from '@react-navigation/native'

type Props = {
  title: string
  action?: React.ReactNode
}

const Header = ({ title, action }: Props) => {
  const navigation = useNavigation()
  const handleGoBack = () => {
    navigation.goBack()
  }

  const { secondary100, secondary40, heading } = theme.colors
  return (
    <LinearGradient style={styles.container} colors={[secondary100, secondary40]}>
      <BorderlessButton onPress={handleGoBack}>
        <Feather name="arrow-left" size={24} color={heading} />
      </BorderlessButton>

      <Text style={styles.title}>{title}</Text>
      {action && <View>{action}</View>}
    </LinearGradient>
  )
}

export default Header
