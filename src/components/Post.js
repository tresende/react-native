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

    adicionaComentario(valorComentario, inputComentario) {
        const novaLista = [
            ...this.props.foto.comentarios,
            {
                id: valorComentario,
                login: 'meuUsuario',
                texto: valorComentario
            }
        ];

        const fotoAtualizada = {
            ...this.props.foto,
            comentarios: novaLista
        }
        this.setState({ foto: fotoAtualizada });
        inputComentario.clear();
    }

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
        const { likeCallback } = this.props;
        const foto = this.props.foto;
        return (
            <View>
                <View style={styles.cabecalho}>
                    <Image source={{ uri: foto.urlPerfil }}
                        style={styles.fotoDePerfil} />
                    <Text>{foto.loginUsuario}</Text>
                </View>
                <Image source={{ uri: foto.urlFoto }} style={styles.foto} />
                {this.exibeLegenda(foto)}
                <View style={styles.rodape}>
                    <Likes foto={foto} likeCallback={likeCallback} />
                    {
                        foto.comentarios.map(comentario =>
                            <View style={styles.comentario} key={comentario.id}>
                                <Text style={styles.tituloComentario}>{comentario.login}</Text>
                                <Text>{comentario.texto}</Text>
                            </View>
                        )
                    }
                    <InputComentario comentarioCallback={this.adicionaComentario.bind(this)} />
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
