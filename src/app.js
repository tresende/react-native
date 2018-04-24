import { AsyncStorage } from 'react-native';
import { Navigation } from 'react-native-navigation';
import Login from './screens/Login'
import Feed from './components/Feed'

export default () => {
    Navigation.registerComponent('Login', () => Login);
    Navigation.registerComponent('Feed', () => Feed);
    Navigation.registerComponent('PerfilUsuario', () => Feed);
    AsyncStorage.getItem('token')
        .then(token => {
            if (token) {
                return {
                    screen: 'Feed',
                    title: 'Instalura'
                };
            }
            return {
                screen: 'Login',
                title: 'Login',
            };
        })
        .then(screen => Navigation.startSingleScreenApp({ screen }));
}