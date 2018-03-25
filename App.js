/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Text,
  Image,
  View,
  FlatList,
  Dimensions
} from 'react-native';

type Props = {};
const width = Dimensions.get('screen').width;
let size = { width: width, height: width }

const fotos = [
  { id: 1, usuario: 'rafael' },
  { id: 2, usuario: 'alberto' },
  { id: 3, usuario: 'vitor' }
];
export default class App extends Component<Props> {

  render() {
    return (
      <FlatList style={{ marginTop: 20 }}
        data={fotos}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) =>
          <View>
            <Text>{item.usuario}</Text>
            <Image source={require('./resources/img/alura.jpg')} style={{ width: width, height: width }} />
          </View>
        }
      />
    );
  }
}
