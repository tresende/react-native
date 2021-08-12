import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const checkStyles = {
  width: 12,
  height: 12,
  backgroundColor: theme.colors.secondary100,
  marginRight: 7,
  borderWidth: 2,
  borderRadius: 3,
  borderColor: theme.colors.secondary50
}

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8
  },
  content: {
    width: 100,
    height: 116,
    backgroundColor: theme.colors.secondary40,
    borderRadius: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7 //20
  },
  title: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 15
  },
  check: {
    ...checkStyles,
    alignSelf: 'flex-end'
  },
  checked: {
    ...checkStyles,
    alignSelf: 'flex-end',
    borderColor: 'transparent',
    backgroundColor: theme.colors.primary
  }
})
