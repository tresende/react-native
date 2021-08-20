import React from 'react'
import { View, Modal, ModalProps, TouchableWithoutFeedback } from 'react-native'
import Background from '../Background'

import { styles } from './styles'

type Props = ModalProps & {
  children: React.ReactNode
  closeModal: () => void
}

const ModalView = ({ children, closeModal, ...rest }: Props) => (
  <Modal transparent animationType="slide" {...rest} style={styles.container} statusBarTranslucent>
    <TouchableWithoutFeedback onPress={closeModal}>
      <View style={styles.overlay}>
        <Background>
          <View style={styles.bar} />
          {children}
        </Background>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
)

export default ModalView
