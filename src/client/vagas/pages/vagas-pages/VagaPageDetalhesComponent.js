import React, { Component } from 'react';

import ApiMethods from '../../../../shared/services/api/ApiMethods';
import CardDetailsComponent from '../../../../shared/components/card/CardDetailsComponent';
import JumbotronComponent from '../../../../shared/components/jumbotron/JumbotronComponent';

const apiMethods = new ApiMethods();

class VagaPageDetalhesComponent extends Component {
    
    state = {
        vaga: []
    };

    async componentDidMount() {
        
        const { id } = this.props.match.params;
        const vagas =  await apiMethods.get('vagas');

        vagas.forEach(vaga => {

            if(vaga._id === id) {
                this.setState({ vaga })
                return vaga;
            }
        })

        console.log(this.state.vaga);
    };

    render() { 
        const { title, description } = this.state.vaga;

        return (
            <section className="container"> 
                <JumbotronComponent title="Detalhes da vaga" />

                <button onClick={ this.props.history.goBack } className="btn btn-primary mb-2 text-white">Voltar</button>

                <CardDetailsComponent  
                    title={ title }
                    description={ description }
                />
            </section>  
        );
    }
}
 
export default VagaPageDetalhesComponent;