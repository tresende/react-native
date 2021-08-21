import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  banner: {
    width: '100%',
    height: 274
  },
  bannerContent: {
    flex: 1,
    paddingHorizontal: 24,
    marginBottom: 10,
    justifyContent: 'flex-end'
  },
  bannerSpace: {
    height: 10,
    width: '100%'
  },
  title: {
    fontSize: 28,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading
  },
  members: {
    marginLeft: 24,
    marginTop: 24
  },
  subtitle: {
    fontSize: 13,
    lineHeight: 21,
    fontFamily: theme.fonts.text400,
    color: theme.colors.heading
  },
  viewContianer: {
    maxHeight: 150,
    width: '100%'
  },
  footer: {
    alignSelf: 'flex-end',
    paddingVertical: 20,
    paddingHorizontal: 24,
    marginBottom: getBottomSpace()
  }
})
