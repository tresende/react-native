import React from 'react'
import { View } from 'react-native'

import { styles } from './styles'

type Props = {
  isCentralized?: boolean
}

const ListDivider = ({ isCentralized = false }: Props) => (
  <View
    style={[
      styles.container,
      isCentralized
        ? {
            marginVertical: 12
          }
        : {
            marginTop: 1,
            marginBottom: 31
          }
    ]}
  />
)

export default ListDivider
