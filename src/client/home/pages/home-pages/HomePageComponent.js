import React, { Component } from 'react';

import ApiMethods from '../../../../shared/services/api/ApiMethods';
import CardComponent from '../../../../shared/components/card/CardComponent';

const apiMethods = new ApiMethods();

class HomePageComponent extends Component {

    state = {
        categorias: [],
        vagas: []
    };

    async componentDidMount() {

        let vagas = await apiMethods.vagas();
        this.setState({ vagas });
        console.log(vagas);
    }
    
    render() { 
        const { vagas } = this.state;
        return (  
            <section className="container">
                <ul className="list-unstyled">
                    {
                        vagas.length && vagas.map(vaga => {

                            return(
                                <li key={ vaga.id } className="mt-2">
                                    <CardComponent  
                                        title={ vaga.title }
                                        description={ vaga.description }
                                        id={ `vagas/${ vaga.id }` }
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