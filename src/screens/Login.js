import React, { Component } from 'react';

import {
    Text,
    Image,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Button,
    AsyncStorage
} from 'react-native';

export default class Login extends Component {

    constructor() {
        super();
        this.state = {
            usuario: '',
            senha: '',
            mensagem: ''
        };
    }

    efeturaLogin() {
        const uri = "http://localhost:8080/api/public/login"
        const requestInfo = {
            method: 'POST',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                login: this.state.usuario,
                senha: this.state.senha
            })
        }
        fetch(uri, requestInfo).then((response) => {
            if (response.ok) {
                return response.text();
            }
            else {
                throw new Error("Não foi possível efetuar login");
            }
        }).then(token => {
            AsyncStorage.setItem('token', token);
            AsyncStorage.setItem('usuario', this.state.usuario);
            this.props.navigator.resetTo({
                screen: 'Feed',
                title: 'Instalura',
            })
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Instalura</Text>
                <View style={styles.form}>
                    <TextInput placeholder="Usuário ..."
                        autoCapitalize="none"
                        onChangeText={texto => { this.setState({ usuario: texto }) }}
                        style={styles.input} />

                    <TextInput placeholder="Senha ..."
                        autoCapitalize="none"
                        secureTextEntry={true}
                        onChangeText={texto => { this.setState({ senha: texto }) }}
                        style={styles.input} />

                    <Button title="Login" onPress={this.efeturaLogin.bind(this)} />
                </View>
                <Text style={styles.mensagem}>
                    {this.state.mensagem}
                </Text>
            </View>
        );
    }
}

const width = Dimensions.get('screen').width;
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    form: {
        width: width * 0.8
    },
    input: {
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    titulo: {
        fontWeight: 'bold',
        fontSize: 26
    },
    mensagem: {
        marginTop: 15,
        color: '#e74c3c'
    }
})