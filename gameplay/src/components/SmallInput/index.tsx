import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { styles } from './styles'

const SmallInput = ({ ...rest }: TextInputProps) => (
  <TextInput {...rest} keyboardType="numeric" style={styles.container} />
)

export default SmallInput
