import { AppRegistry } from 'react-native';
import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    Dimensions,
    StyleSheet
} from 'react-native';

type Props = {};
const width = Dimensions.get('screen').width;
let size = { width: width, height: width }

export default class Post extends Component {

    render() {
        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image source={require('../../resources/img/alura.jpg')}
                        style={styles.fotoDePerfil} />
                    <Text>{this.props.foto.usuario}</Text>
                </View>
                <Image source={require('../../resources/img/alura.jpg')} style={styles.foto} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        margin: 10, flexDirection: 'row', alignItems: 'center'
    },
    fotoDePerfil: {
        marginRight: 10,
        borderRadius: 20,
        width: 40,
        height: 40
    },
    foto: {
        width: width,
        height: width
    }
})
