import React, { Component } from 'react';

import methods from '../../../../shared/services/api/ApiMethods';
import CardComponent from '../../../../shared/components/card/CardComponent';

class VagasPageDetalhesComponent extends Component {
    
    state = {
        vaga: []
    }
     componentDidMount() {

        const { id } = this.props.match.params;
        const vagas =  methods.vagas();
        
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
            <CardComponent  
                title={ title }
                description={ description }
            />
        );
    }
}
 
export default VagasPageDetalhesComponent;