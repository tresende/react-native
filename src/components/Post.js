import React, { Component } from 'react';
import InputComentario from './InputComentario'
import Likes from './Likes'

import {
    Text,
    Image,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    StyleSheet,
} from 'react-native';

const width = Dimensions.get('screen').width;
let size = { width: width, height: width }

export default class Post extends Component {

    exibeLegenda(foto) {

        if (foto.comentario === '')
            return;

        return (
            <View style={styles.comentario}>
                <Text style={styles.tituloComentario}>{foto.loginUsuario}</Text>
                <Text>{foto.comentario}</Text>
            </View>
        );
    }

    render() {
        const { foto, likeCallback, comentarioCallback } = this.props;
        foto.urlPerfil = 'https://randomuser.me/api/portraits/men/'+ Math.floor(Math.random() * 6) + 1  +'.jpg';
        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image source={{ uri: foto.urlPerfil }}
                        style={styles.fotoDePerfil} />
                    <Text>{foto.loginUsuario}
                    </Text>
                </View>
                <Image source={{ uri: foto.urlFoto }} style={styles.foto} />
                {this.exibeLegenda(foto)}
                <View style={styles.rodape}>
                    <Likes foto={foto} likeCallback={likeCallback} />
                    {
                        foto.comentarios.map((comentario, key) =>
                            <View style={styles.comentario} key={comentario.id || key}>
                                <Text style={styles.tituloComentario}>{comentario.login}</Text>
                                <Text>{comentario.texto}</Text>
                            </View>
                        )
                    }
                    <InputComentario idFoto={foto.id} comentarioCallback={comentarioCallback} />
                </View>
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
    },
    botaoDeLike: {
        marginBottom: 10,
        width: 40,
        height: 40
    },
    rodape: {
        margin: 10
    },
    comentario: {
        flexDirection: 'row'
    },
    tituloComentario: {
        fontWeight: 'bold',
        marginRight: 5
    }
})
