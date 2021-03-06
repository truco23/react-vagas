import React, { Component } from 'react';

import ApiMethods from '../../../../shared/services/api/ApiMethods';
import JumbotronComponent from '../../../../shared/components/jumbotron/JumbotronComponent';
import VagasFormEditComponent from '../../components/vagas-form/VagasFormEditComponent';

const apiMethods = new ApiMethods();

class VagaPageDetalhesComponent extends Component {

    render() { 

        return (
            <section className="container"> 
                <JumbotronComponent title="Editar da vaga" />

                <button onClick={ this.props.history.goBack } className="btn btn-primary mb-2 text-white">Voltar</button>

                <VagasFormEditComponent props={ this.props } />
            </section>  
        );
    }
}
 
export default VagaPageDetalhesComponent;