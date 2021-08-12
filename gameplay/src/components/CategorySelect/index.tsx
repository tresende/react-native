import React from 'react'
import { ScrollView } from 'react-native'

import { categories } from '../../utils/categories'
import Category from '../Category'
import { styles } from './styles'

const CategorySelect = () => (
  <ScrollView
    style={styles.container}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{ paddingRight: 40 }}
  >
    {categories.map((category) => (
      <Category key={category.id} />
    ))}
  </ScrollView>
)

export default CategorySelect
