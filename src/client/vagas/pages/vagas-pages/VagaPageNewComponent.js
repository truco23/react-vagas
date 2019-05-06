import React, { Component } from 'react';

import JumbotronComponent from '../../../../shared/components/jumbotron/JumbotronComponent';
import VagasFormNewComponent from '../../components/vagas-form/VagasFormNewComponent';
import MenuComponent from '../../../../shared/components/menu/MenuComponent';

class VagaPageNewComponent extends Component {
    
    render() { 
        return (  
            <section className="container">
                <MenuComponent />
                <JumbotronComponent title="Cadastro de vaga" />

                <VagasFormNewComponent props={ this.props } />
            </section>
        );
    }
}
 
export default VagaPageNewComponent;