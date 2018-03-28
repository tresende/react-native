import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    Dimensions,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

const width = Dimensions.get('screen').width;
let size = { width: width, height: width }

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto
        }
    }

    carregaIcone(likeada) {
        return likeada ? require('../../resources/img/s2-checked.png') : require('../../resources/img/s2.png')
    }

    like() {
        const fotoAtualizada = {
            ...this.state.foto,
            likeada: !this.state.foto.likeada
        }
        this.setState({ foto: fotoAtualizada })
    }

    exibeLike(likers) {
        return (
            likers.length > 0 ?
                <Text style={styles.likes}>{likers.length} {likers.length > 1 ? 'curtidas' : 'curtida'}</Text>
                : null
        )
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

        const foto = this.state.foto;
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
                    <TouchableOpacity onPress={this.like.bind(this)}>
                        <Image style={styles.botaoDeLike}
                            source={this.carregaIcone(foto.likeada)} />
                    </TouchableOpacity>
                    {this.exibeLike(foto.likers)}
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
    likes: {
        fontWeight: 'bold'
    },
    comentario: {
        flexDirection: 'row'
    },
    tituloComentario: {
        fontWeight: 'bold',
        marginRight: 5
    }

})
