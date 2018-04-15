import React, { Component } from 'react';

import {
    Text,
    Image,
    View,
    Dimensions,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    Button
} from 'react-native';

export default class Login extends Component {

    login() {

    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>Instalura</Text>
                <View style={styles.form}>
                    <TextInput placeholder="Usuário ..."
                        onChangeText={texto => { this.setState({ usuario: texto }) }}
                        style={styles.input} />

                    <TextInput placeholder="Senha ..."
                        onChangeText={texto => { this.setState({ senha: texto }) }}
                        style={styles.input} />

                    <Button title="Login" onPress={() => { this.login() }} />
                </View>
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
    }
})