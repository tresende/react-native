import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    FlatList,
    Platform
} from 'react-native';

import Post from './Post';

export default class Feed extends Component {

    constructor() {
        super();
        this.state = {
            fotos: []
        }
    }

    //android ip 10.0.2.2l:8080

    //componente montou
    componentDidMount() {
        fetch('http://localhost:8080/api/public/fotos/rafael')
            .then(resposta => resposta.json())
            .then(json => this.setState({ fotos: json }));
    }

    buscaPorId(idFoto) {
        return this.state.fotos
            .find(foto => foto.id === idFoto)
    }

    atualizaFotos(fotoAtualizada) {
        const fotos = this.state.fotos.map(foto =>
            foto.id === fotoAtualizada.id ? fotoAtualizada : foto);
        this.setState({ fotos });
    }

    like(idFoto) {
        let foto = this.buscaPorId(idFoto);
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

        this.atualizaFotos(fotoAtualizada);
    }

    adicionaComentario(idFoto, valorComentario, inputComentario) {
        let foto = this.buscaPorId(idFoto);
        const novaLista = [...foto.comentarios, {
            id: this.state.valorComentario,
            login: 'meuUsuario',
            texto: valorComentario
        }];

        const fotoAtualizada = {
            ...foto,
            comentarios: novaLista
        }
        this.atualizaFotos(fotoAtualizada);
        inputComentario.clear();
    }

    render() {
        return (
            <FlatList data={this.state.fotos}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) =>
                    <Post comentarioCallback={this.adicionaComentario.bind(this)} likeCallback={this.like.bind(this)} foto={item} />
                }
            />
        );
    }
}