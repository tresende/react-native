import { AsyncStorage } from 'react-native';

export default class InstaluraFetchService {

    static get(recurso) {
        return AsyncStorage.getItem('token').then(token => {
            return {
                headers: new Headers({
                    "X-AUTH-TOKEN": token
                })
            }
        }).then(requestInfo => fetch(recurso, requestInfo))
            .then(resposta => {
                if (resposta.ok) {
                    return resposta.json();
                }
                throw new Error('Não foi possível completar a opreção');
            });
    }

    static post(recurso, dados) {
        const uri = 'http://localhost:8080/api' + recurso;

        return AsyncStorage.getItem('token')
            .then(token => {

                return {
                    method: 'POST',
                    body: JSON.stringify(dados),
                    headers: new Headers({
                        "Content-type": "application/json",
                        "X-AUTH-TOKEN": token
                    })
                };
            })
            .then(requestInfo => fetch(uri, requestInfo))
            .then(resposta => {
                if (resposta.ok) {
                    return resposta.json();
                }

                throw new Error('Não foi possível completar a opreção');
            });

    }
}