import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    FlatList,
    Platform
} from 'react-native';

import Post from './components/Post';

class InstaluraMobile extends Component {

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

    like(idFoto) {
        let foto = this.state.fotos.find(foto => foto.id == idFoto);
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

        const fotos = this.state.fotos.map(foto => foto.id === idFoto ? fotoAtualizada : foto);

        this.setState({ fotos })
    }

    adicionaComentario(idFoto, valorComentario, inputComentario) {
        let foto = this.state.fotos.find(foto => foto.id == idFoto);
        const novaLista = [...foto.comentarios, {
            id: this.state.valorComentario,
            login: 'meuUsuario',
            texto: valorComentario
        }];

        const fotoAtualizada = {
            ...foto,
            comentarios: novaLista
        }
        const fotos = this.state.fotos.map(foto => foto.id === idFoto ? fotoAtualizada : foto);

        this.setState({ fotos })
        inputComentario.clear();
    }

    render() {

        return (
            <FlatList style={styles.container}
                data={this.state.fotos}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) =>
                    <Post comentarioCallback={this.adicionaComentario.bind(this)} likeCallback={this.like.bind(this)} foto={item} />
                }
            />
        );
    }
}

const margem = Platform.OS == 'ios' ? 20 : 0;
const styles = StyleSheet.create({
    container: {
        marginTop: margem
    }
})

export default () => {
    AppRegistry.registerComponent('InstaluraMobile', () => InstaluraMobile);
}