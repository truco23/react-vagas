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

        console.log('fazendo um post para ' + path);
        console.log(params);

        return fetch(`${ apiUrl }/${ path }`, {

        })
        .then()
        .catch(erro => console.log(erro.message))
    }
}
 
export default ApiMethods;
