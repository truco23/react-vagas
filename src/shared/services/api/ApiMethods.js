import apiUrl from './api.url';

const api = apiUrl;

class ApiMethods {
    
    setHeaders(...params) {

        let headers;

        if(params[0].token) {
            console.log('incluir token');
            headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'x-access-token': params[0].token
            };
        } else {
            console.log('sem token');
            headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };
        }

        return headers;
    };

    get(path) {

        return fetch(`${ api }/${ path }`)
            .then(res => {

                if(!res.ok) {
                    throw res;
                } else {
                    return res.json();
                }
            })
            .catch(erro => {
                console.log(erro.message);
                return erro.message;
            });
    };

    post(path, ...params) {

        let headers = this.setHeaders(...params);
        
        const body = JSON.stringify(params[0]);
        
        return fetch(`${ apiUrl }/${ path }`, {
            headers,  
            method: 'POST',
            body    
        })
        .then(res => res.json())
        .then(res => res)
        .catch(erro => console.log(erro.message))
    };

    put(path, ...params) {

        console.log('Atualizando');
        console.log(params);
        
        let headers = this.setHeaders(...params);
        const body = JSON.stringify(params[0])

        return fetch(`${ apiUrl }/${ path }/${ params[0]._id }`, {
            headers,
            method: 'PUT',
            body
        })
        .then(res => res.json())
        .then(res => res)
        .catch(erro => console.log(erro.message));
    };
}
 
export default ApiMethods;
