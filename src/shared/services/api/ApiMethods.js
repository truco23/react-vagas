import apiUrl from './api.url';

const api = apiUrl;

class ApiMethods {
    
    categorias(path) {

        return fetch(`${ api }/${ path }`)
            .then(res => {
                if(!res.ok) {
                    throw res;
                } else {
                    return res.json();
                }
            })
        // return [
        //     {
        //         id: 1,
        //         title: "Front-End"
        //     },
        //     {
        //         id: 2,
        //         title: "Back-End"
        //     },
        //     {
        //         id: 3,
        //         title: "UX Design"
        //     },
        //     {
        //         id: 4,
        //         title: "Web Design"
        //     },
        //     {
        //         id: 5,
        //         title: "Fullstack"
        //     }
        // ]
    };

    vagas(path) {

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
            })
        // return [
        //     {
        //         id: 1,
        //         title: "Front-end estagiário",
        //         description: "Vaga para front-end para atuar de forma remota",
        //         idCategoria: 1
        //     },
        //     {
        //         id: 2,
        //         title: "Back-end Pleno",
        //         description: "Vaga para back-end para atuar de forma presencial",
        //         idCategoria: 2
        //     },
        //     {
        //         id: 3,
        //         title: "UX Deginer Jr.",
        //         description: "Vaga para front-end para atuar de forma remota",
        //         idCategoria: 3
        //     },
        //     {
        //         id: 4,
        //         title: "Web Design Senior",
        //         description: "Vaga para web design senior",
        //         idCategoria: 4
        //     },
        //     {
        //         id: 5,
        //         title: "UX Design Jr.",
        //         description: "Vaga para ux nível júnior",
        //         idCategoria: 5
        //     }
        // ]
    };
}
 
export default ApiMethods;
