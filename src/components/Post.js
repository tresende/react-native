import React, { Component } from 'react';
import {
    Text,
    Image,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';

const width = Dimensions.get('screen').width;
let size = { width: width, height: width }

export default class Post extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foto: this.props.foto,
            valorComentario: ''
        }
    }

    carregaIcone(likeada) {
        return likeada ? require('../../resources/img/s2-checked.png') : require('../../resources/img/s2.png')
    }

    adicionaComentario() {
        const novaLista = [
            ...this.state.foto.comentarios,
            {
                id: this.state.valorComentario,
                login: 'meuUsuario',
                texto: this.state.valorComentario
            }
        ];

        const fotoAtualizada = {
            ...this.state.foto,
            comentarios: novaLista
        }
        this.setState({ foto: fotoAtualizada, valorComentario: '' });
        this.inputComentario.clear();
    }

    like() {
        let foto = this.state.foto;
        let novaLista = [];
        if (!foto.likeada) {
            novaLista = [
                ...foto.likers,
                { login: 'meuUsuario' }
            ];
        } else {
            novaLista = foto.likers.filter((item) => {
                return item.login != 'meuUsuario'
            });
        }

        const fotoAtualizada = {
            ...foto,
            likeada: !foto.likeada,
            likers: novaLista
        };
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
                    {
                        foto.comentarios.map(comentario =>
                            <View style={styles.comentario} key={comentario.id}>
                                <Text style={styles.tituloComentario}>{comentario.login}</Text>
                                <Text>{comentario.texto}</Text>
                            </View>
                        )
                    }
                    <TouchableOpacity onPress={this.adicionaComentario.bind(this)}>
                        <View style={styles.novoComentario}>
                            <TextInput
                                ref={input => this.inputComentario = input}
                                onChangeText={text => this.setState({ valorComentario: text })}
                                style={styles.input} placeholder="Adicione um Comentário" />
                            <Image style={styles.icone} source={require('../../resources/img/send.png')} />
                        </View>
                    </TouchableOpacity>
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
    },
    input: {
        flex: 1,
        height: 40
    },
    icone: {
        width: 30,
        height: 30
    },
    novoComentario: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})
