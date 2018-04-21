import { Navigation } from 'react-native-navigation';
import Login from './screens/Login'
import Feed from './components/Feed'

export default () => {
    Navigation.registerComponent('Login', () => Login);
    Navigation.registerComponent('Feed', () => Feed);
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'Login'
        },
        title: 'Login'
    });
}