import React, { useState } from 'react'
import { Text, View, TextInput } from 'react-native'

import { Styles } from './styled'

const SignIn = () => {
  const [text, setText] = useState('')
  return (
    <View style={Styles.container}>
      <TextInput style={Styles.input} onChangeText={(value) => setText(value)} />
      <Text>Você digitou: {text}</Text>
    </View>
  )
}

export default SignIn
