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

    render() {

        return (
            <FlatList style={styles.container}
                data={this.state.fotos}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) =>
                    <Post foto={item} />
                }
            />
        );
    }
}

const margem = Platform.OS == 'ios' ? 20 : 0;
const styles = StyleSheet.create({
    container: {
        marginTop: margin
    }
})

export default () => {
    AppRegistry.registerComponent('InstaluraMobile', () => InstaluraMobile);
}