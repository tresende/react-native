import React, { Component } from 'react';
import {
    Image,
    View,
    TouchableOpacity,
    TextInput,
    StyleSheet
} from 'react-native';

export default class InputComentario extends Component {

    constructor(){

        super();
        this.state = {
            valorComentario : ''
        }
    }

    render() {

        return (

            <View style={styles.container}>
                <TextInput
                    ref={input => this.inputComentario = input}
                    onChangeText={text => this.setState({ valorComentario: text })}
                    style={styles.input} placeholder="Adicione um Comentário"
                    underlineColorAndroid="transparent"
                />
                
                <TouchableOpacity onPress={() => {
                    this.props.comentarioCallback(this.state.valorComentario, this.inputComentario)
                    this.setState({valorComentario:''})
                    }}>
                    <Image style={styles.icone} source={require('../../resources/img/send.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    input: {
        flex: 1,
        height: 40
    },
    icone: {
        width: 30,
        height: 30
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    }
})
