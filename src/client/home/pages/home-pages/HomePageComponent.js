import React, { Component } from 'react';

import ApiMethods from '../../../../shared/services/api/ApiMethods';
import CardComponent from '../../../../shared/components/card/CardComponent';
import JumbotronComponent from '../../../../shared/components/jumbotron/JumbotronComponent';

const apiMethods = new ApiMethods();

class HomePageComponent extends Component {

    state = {
        categorias: [],
        vagas: []
    };

    async componentDidMount() {

        let vagas = await apiMethods.vagas('vagas');
        this.setState({ vagas });
        console.log(vagas);

        let categorias = await apiMethods.vagas('categorias');
        this.setState({ categorias });
        console.log(categorias);
    }
    
    render() { 
        const { vagas } = this.state;
        return (  
            <section className="container">
                <JumbotronComponent title="Vagas em aberto" />

                <ul className="list-unstyled row">
                    {
                        vagas.length && vagas.map(vaga => {

                            return(
                                <li key={ vaga._id } className="mt-2 col-sm-12 col-md-6 col-lg-4">
                                    <CardComponent  
                                        title={ vaga.title }
                                        description={ vaga.description }
                                        id={ `vagas/${ vaga._id }` }
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