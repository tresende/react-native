import React from 'react'
import { ScrollView } from 'react-native'

import { categories } from '../../utils/categories'
import Category from '../Category'
import { styles } from './styles'

type Props = {
  categorySelected: string
  setCategory: (id: string) => void
}

const CategorySelect = ({ categorySelected, setCategory }: Props) => {
  return (
    <ScrollView
      style={styles.container}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {categories.map((category) => (
        <Category
          onPress={() => setCategory(category.id)}
          title={category.title}
          icon={category.icon}
          key={category.id}
          checked={category.id === categorySelected}
        />
      ))}
    </ScrollView>
  )
}

export default CategorySelect
