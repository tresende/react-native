import React from 'react'
import { View, Modal, ModalProps } from 'react-native'
import Background from '../Background'

import { styles } from './styles'

type Props = ModalProps & {
  children: React.ReactNode
}

const ModalView = ({ children, ...rest }: Props) => (
  <Modal transparent animationType="slide" {...rest} style={styles.container}>
    <View style={styles.overlay}>
      <Background>
        <View style={styles.bar} />
        {children}
      </Background>
    </View>
  </Modal>
)

export default ModalView
