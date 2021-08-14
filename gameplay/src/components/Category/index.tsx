import React from 'react'
import { View, Text } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

import { theme } from '../../global/styles/theme'
import { styles } from './styles'

type Props = RectButtonProps & {
  title: string
  icon: React.FC<SvgProps>
  checked?: boolean
  hasCheckbox?: boolean
}

const Category = ({ title, icon: Icon, checked = false, hasCheckbox = false, ...rest }: Props) => {
  const { secondary50, secondary70, secondary85, secondary40 } = theme.colors

  return (
    <RectButton {...rest}>
      <LinearGradient style={styles.container} colors={[secondary50, secondary70]}>
        <LinearGradient
          style={[
            styles.content,
            {
              opacity: checked ? 1 : 0.4
            }
          ]}
          colors={[checked ? secondary85 : secondary40, secondary50]}
        >
          {hasCheckbox && <View style={checked ? styles.checked : styles.check} />}
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  )
}

export default Category
