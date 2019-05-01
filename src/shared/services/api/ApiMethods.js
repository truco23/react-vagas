import apiUrl from './api.url';

const api = apiUrl;

class ApiMethods {
    
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

        const { email, password } = params[0];
        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };
        const body = JSON.stringify({email, password});

        console.log('fazendo um post para ' + path);
        console.log(email);
        console.log(password);
        
        return fetch(`${ apiUrl }/${ path }`, {
            headers,  
            method: 'POST',
            body    
        })
        .then(res => res.json())
        .then(res => res)
        .catch(erro => console.log(erro.message))
    }
}
 
export default ApiMethods;
