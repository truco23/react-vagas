import React, { Component } from 'react';

import ApiMethods from '../../../../shared/services/api/ApiMethods';
import CardComponent from '../../../../shared/components/card/CardComponent';
import JumbotronComponent from '../../../../shared/components/jumbotron/JumbotronComponent';
import MenuComponent from '../../../../shared/components/menu/MenuComponent';

const apiMethods = new ApiMethods();

class HomePageComponent extends Component {

    state = {
        vagas: []
    };

    async componentDidMount() {

        let vagas = await apiMethods.get('vagas');
        this.setState({ vagas });
        console.log(vagas);
    }
    
    render() { 
        const { vagas } = this.state;

        return (  
            <section className="container">
                <MenuComponent />
                <JumbotronComponent title="Vagas em aberto" />

                <ul className="list-unstyled row">
                    {
                        vagas && vagas.map(vaga => {

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