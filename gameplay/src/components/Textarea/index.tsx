import React from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { styles } from './styles'

const Textarea = ({ ...rest }: TextInputProps) => (
  <>
    <TextInput {...rest} style={styles.container} />
  </>
)

export default Textarea
