import React from 'react'

import { Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { styles } from './styles'

type Props = RectButtonProps & {
  title: string
}

const Button = ({ title, ...rest }: Props) => (
  <RectButton style={styles.contatiner} {...rest}>
    <Text style={styles.title}>{title}</Text>
  </RectButton>
)

export default Button
