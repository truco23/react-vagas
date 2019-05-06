import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ApiMethods from '../../../../shared/services/api/ApiMethods';
import CardComponent from '../../../../shared/components/card/CardComponent';
import JumbotronComponent from '../../../../shared/components/jumbotron/JumbotronComponent';
import MenuComponent from '../../../../shared/components/menu/MenuComponent';
import LocalStorageService from '../../../../shared/services/localStorage/LocalStorageService';

const apiMethods = new ApiMethods();
const apiLocalStorage = new LocalStorageService();

class HomePageComponent extends Component {

    state = {
        vagas: [],
        token: ''
    };

    async componentDidMount() {

        let vagas = await apiMethods.get('vagas');
        this.setState({ vagas });
        console.log(vagas);

        const token = apiLocalStorage.getToken();
        if(token) {
            this.setState({ token });
        }
    }
    
    render() { 
        const { vagas, token } = this.state;

        return (  
            <section className="container">
                <MenuComponent />
                <JumbotronComponent title="Vagas em aberto" />

                {
                    token
                    ? <Link to="/vaga/new" className="btn btn-success">Cadastrar</Link>
                    : ''
                }
                

                <ul className="list-unstyled row">
                    {
                        vagas && vagas.map(vaga => {

                            return(
                                <li key={ vaga._id } className="mt-2 col-sm-12 col-md-6 col-lg-4">
                                    <CardComponent  
                                        title={ vaga.title }
                                        description={ vaga.description }
                                        id={ `/vaga/${ vaga._id }` }
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
            </section>
        );
    }
}
 
export default HomePageComponent;