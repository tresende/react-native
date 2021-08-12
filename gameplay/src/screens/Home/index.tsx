import React from 'react'
import { useState } from 'react'
import { View } from 'react-native'
import ButtonAdd from '../../components/ButtonAdd'
import CategorySelect from '../../components/CategorySelect'
import Profile from '../../components/Profile'

import { styles } from './styles'

const Home = () => {
  const [category, setCategory] = useState('1')

  const handleCategorySelect = (categoryId: string) => {
    const newCategory = categoryId === category ? '' : categoryId
    setCategory(newCategory)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>
      <View>
        <CategorySelect categorySelected={category} setCategory={handleCategorySelect} />
      </View>
    </View>
  )
}

export default Home
