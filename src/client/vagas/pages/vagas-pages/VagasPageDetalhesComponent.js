import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CardComponent from '../../../../shared/components/card/CardComponent';
import ApiMethods from '../../../../shared/services/api/ApiMethods';

const apiMethods = new ApiMethods();

class VagasPageDetalhesComponent extends Component {
    
    state = {
        vaga: []
    }
    async componentDidMount() {

        const { id } = this.props.match.params;
        const vagas =  await apiMethods.vagas('vagas');

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
                <Link onClick={ this.props.history.goBack } className="btn btn-primary mb-2 text-white">Voltar</Link>

                <CardComponent  
                    title={ title }
                    description={ description }
                />
            </section>  
        );
    }
}
 
export default VagasPageDetalhesComponent;