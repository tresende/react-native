import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: 360
  },
  content: {
    paddingHorizontal: 30,
    flex: 1
  },
  title: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 40,
    lineHeight: 40,
    fontFamily: theme.fonts.title700
  },
  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 40,
    fontFamily: theme.fonts.title500
  },
  footer: {
    flex: 1,
    justifyContent: 'center'
  }
})
