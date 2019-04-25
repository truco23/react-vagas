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
}
 
export default ApiMethods;
