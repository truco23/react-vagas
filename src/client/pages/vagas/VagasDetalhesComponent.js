import React, { Component } from 'react';

import CardComponent from '../../../shared/components/card/CardComponent';
import methods from '../../../shared/services/api/ApiMethods';

class VagasDetalhesComponent extends Component {
    
    state = {
        vaga: []
    }
    async componentDidMount() {

        const { id } = this.props.match.params;
        const vagas = await methods.vagas();
        
        await vagas.forEach(vaga => {

            if(vaga.id == id) {
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
 
export default VagasDetalhesComponent
;