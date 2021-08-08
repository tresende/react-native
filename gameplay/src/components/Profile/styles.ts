import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const fonts = {
  fontSize: 24,
  color: theme.colors.heading
}

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    marginRight: 5,
    ...fonts
  },
  username: {
    fontFamily: theme.fonts.title700,
    ...fonts
  },
  message: {
    ...fonts,
    fontSize: 12,
    fontFamily: theme.fonts.text400
  },
  user: {
    flexDirection: 'row'
  }
})
