import React, { Component } from 'react';
import {
    AsyncStorage,
    StyleSheet,
    FlatList,
    ScrollView
} from 'react-native';

import Post from './Post';
import InstaluraFetchService from '../services/InstaluraFetchService'
import Notificacao from '../api/Notificacao'
import HeaderUsuario from './HeaderUsuario'

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
        this.props.navigator.setOnNavigatorEvent(evento => {
            if (evento.id === 'willAppear') {
                this.load();
            }
        })
        this.load();
    }

    load() {
        let uri = 'http://localhost:8080/api/fotos/';
        if (this.props.usuario) {
            uri = `http://localhost:8080/api/public/fotos/${this.props.usuario}`;
        }
        InstaluraFetchService.get(uri)
            .then(json => this.setState({ fotos: json }))
            .catch(e => {
                Notificacao.exibe('Ops...', 'Algo deu errado!')
            });
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
        let listaOriginal = this.state.fotos;
        let foto = this.buscaPorId(idFoto);

        AsyncStorage.getItem('usuario').then(usuarioLogado => {
            let novaLista = [];

            if (!foto.likeada) {
                novaLista = [
                    ...foto.likers,
                    { login: usuarioLogado }
                ];
            } else {
                novaLista = foto.likers.filter((item) => {
                    return item.login != usuarioLogado
                });
            }

            return novaLista
        }).then(novaLista => {
            const fotoAtualizada = {
                ...foto,
                likeada: !foto.likeada,
                likers: novaLista
            };
            this.atualizaFotos(fotoAtualizada);
        });

        InstaluraFetchService.post(`/fotos/${idFoto}/like`)
            .catch(e => {
                this.setState({ fotos: listaOriginal });
                Notificacao.exibe('Ops...', 'Algo deu errado!')
            });
    }

    adicionaComentario(idFoto, valorComentario, inputComentario) {
        const comentario = {
            texto: valorComentario
        };

        let foto = this.buscaPorId(idFoto);
        InstaluraFetchService.post(`/fotos/${idFoto}/comment`, comentario)
            .then(comentario => [...foto.comentarios, comentario])
            .then(novaLista => {
                const fotoAtualizada = {
                    ...foto,
                    comentarios: novaLista
                }
                this.atualizaFotos(fotoAtualizada);
                inputComentario.clear();
            }).catch(e => {
                Notificacao.exibe('Ops...', 'Algo deu errado!')
            });;
    }

    verPerfil(idFoto) {
        const foto = this.buscaPorId(idFoto);
        this.props.navigator.push({
            screen: 'PerfilUsuario',
            backButtonTitle: '',
            title: foto.loginUsuario,
            passProps: {
                usuario: foto.loginUsuario,
                fotoDePerfil: foto.urlPerfil || 'https://randomuser.me/api/portraits/men/' + Math.floor(Math.random() * 6) + 1 + '.jpg'
            }
        })
    }

    exibeHeader() {
        if (this.props.usuario) {
            return <HeaderUsuario posts={this.state.fotos.length} {...this.props} />
        }
    }

    render() {
        return (
            <ScrollView>
                {this.exibeHeader()}
                <FlatList data={this.state.fotos}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) =>
                        <Post verPerfilCallback={this.verPerfil.bind(this)}
                            comentarioCallback={this.adicionaComentario.bind(this)}
                            likeCallback={this.like.bind(this)} foto={item} />
                    }
                />
            </ScrollView>
        );
    }
}