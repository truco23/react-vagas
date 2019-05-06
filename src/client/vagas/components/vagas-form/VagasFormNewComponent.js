import React, { Component } from 'react';

import VagasInputComponent from '../vagas-input/VagasInputComponent';
import SelectComponent from '../../../../shared/components/select/SelectComponent';
import LocalStorageService from '../../../../shared/services/localStorage/LocalStorageService';

const apiLocalStorage = new LocalStorageService();

class VagasFormNewComponent extends Component {
    
    state = {

        title: '',
        description: '',
        idCategory: '',
        token: ''
    };

    async componentDidMount() {

        const token = apiLocalStorage.getToken();
        this.setState({ token });
    
    }

    handleSubmit = e => {

        e.preventDefault();
        console.log('cadastro');
        
        console.log(this.state);
    };

    handleInputChange = e => {

        this.setState({ [e.target.name]: e.target.value });
    }

    render() { 
        return (  
            <form onSubmit={ this.handleSubmit.bind(this) } >
                <fieldset>
                    <VagasInputComponent 
                        label="Título da vaga:"
                        title={ this.state.title }
                        id="title"
                        name="title"
                        type="text"
                        erroId="titleHelp"
                        placeholder="Digite o título da vaga aqui"
                        erroMsg="Título da vaga obrigatório"
                        onchange={ this.handleInputChange.bind(this) }
                        title={ this.state.title }
                    />

                    <VagasInputComponent 
                        label="Descrição da vaga:"
                        title={ this.state.description }
                        id="description"
                        name="description"
                        type="text"
                        erroId="descriptionHelp"
                        placeholder="Digite a descrição da vaga aqui"
                        erroMsg="Descrição da vaga obrigatório"
                        onchange={ this.handleInputChange.bind(this) }
                        title={ this.state.description } 
                    />

                    <SelectComponent 
                        idCategory=''
                        onchange={ this.handleInputChange.bind(this) } 
                    />

                </fieldset>

                <fieldset>
                    <button type="submit" className="btn btn-success">Salvar</button>
                </fieldset>
            </form>
        );
    }
}
 
export default VagasFormNewComponent;