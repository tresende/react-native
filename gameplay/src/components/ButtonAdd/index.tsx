import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'

const ButtonAdd = ({ ...rest }: RectButtonProps) => (
  <RectButton style={styles.container} {...rest}>
    <MaterialCommunityIcons name="plus" color={theme.colors.heading} size={24} />
  </RectButton>
)

export default ButtonAdd
