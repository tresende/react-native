import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    FlatList
} from 'react-native';

import Post from './components/Post';

class InstaluraMobile extends Component {
    render() {
        const fotos = [
            { id: 1, usuario: 'rafael' },
            { id: 2, usuario: 'alberto' },
            { id: 3, usuario: 'vitor' }
        ];

        return (
            <FlatList style={styles.container}
                data={fotos}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) =>
                    <Post foto={item} />
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20
    }
})

export default () => {
    AppRegistry.registerComponent('InstaluraMobile', () => InstaluraMobile);
}