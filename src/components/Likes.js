import React, { Component } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

export default class Likes extends Component {

    constructor() {
        super();
        this.state = {
            valorComentario: ''
        }
    }

    carregaIcone(likeada) {
        return likeada ? require('../../resources/img/s2-checked.png') : require('../../resources/img/s2.png')
    }

    exibeLikes(likers) {
        return (
            likers.length > 0 ?
                <Text style={styles.likes}>{likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}</Text>
                : null
        )
    }

    render() {
        const { foto, likeCallback } = this.props;

        return (
            <View>
                <TouchableOpacity onPress={() => {
                    likeCallback(foto.id)
                }}>
                    <Image style={styles.botaoDeLike} source={this.carregaIcone(foto.likeada)} />
                </TouchableOpacity>
                {this.exibeLikes(foto.likers)}
            </View>
        )
    }

}
const styles = StyleSheet.create({
    botaoDeLike: {
        marginBottom: 10,
        width: 40,
        height: 40
    }, likes: {
        fontWeight: 'bold'
    }
})