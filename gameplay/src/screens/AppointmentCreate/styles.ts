import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

const border = {
  borderColor: theme.colors.secondary50,
  borderWidth: 1,
  borderRadius: 8
}

export const styles = StyleSheet.create({
  container: {},
  form: {
    paddingHorizontal: 24
  },
  select: {
    overflow: 'hidden',
    ...border,
    width: '100%',
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 12
  },
  selectBody: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary50,
    ...border
  },
  label: {
    fontFamily: theme.fonts.title700,
    fontSize: 18,
    color: theme.colors.heading
  },
  caractersLimit: {
    fontFamily: theme.fonts.text400,
    fontSize: 13,
    color: theme.colors.highlight
  },
  field: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24
  },
  divider: {
    marginRight: 4,
    fontFamily: theme.fonts.text500,
    fontSize: 15,
    color: theme.colors.highlight
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
