import React, { Component } from 'react';

import methods from '../../../../shared/services/api/ApiMethods';
import CardComponent from '../../../../shared/components/card/CardComponent';

class VagasPageDetalhesComponent extends Component {
    
    state = {
        vaga: []
    }
    async componentDidMount() {

        const { id } = this.props.match.params;
        const vagas =  await methods.vagas();
        
        vagas.forEach(vaga => {

            if(vaga.id === parseInt(id)) {
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
                <a onClick={ this.props.history.goBack } className="btn btn-primary mb-2 text-white">Voltar</a>

                <CardComponent  
                    title={ title }
                    description={ description }
                />
            </section>  
        );
    }
}
 
export default VagasPageDetalhesComponent;