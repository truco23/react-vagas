import React, { Component } from 'react';

import VagasInputComponent from '../vagas-input/VagasInputComponent';
import SelectComponent from '../../../../shared/components/select/SelectComponent';
import ApiMethods from '../../../../shared/services/api/ApiMethods';
import LocalStorageService from '../../../../shared/services/localStorage/LocalStorageService';

const apiMethods = new ApiMethods();
const methodsLocalStorage = new LocalStorageService();

class VagaFormEditComponent extends Component {
    
    state = {

        _id: '',
        title: '',
        description: '',
        idCategory: '',
        token: ''
    };

    async componentDidMount() {

        const { id } = this.props.props.match.params;
        const vaga = await apiMethods.get(`vagas/${ id }`);
        const { _id, title, description, idCategory } = vaga;
        const token = methodsLocalStorage.getToken();
        
        this.setState({ _id, title, description, idCategory });
        this.setState({ token });
    }
    
    handleSubmit = async e => {
        
        e.preventDefault();

        try {
            await apiMethods.put('vagas', this.state);
            this.props.props.history.push('/vagas');
        } catch (error) {
            console.log(error);
        }
    };

    handleInputChange = e => {
        
        this.setState({ [e.target.name]: e.target.value });
    };

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
                        idCategory={ this.state.idCategory } 
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
 
export default VagaFormEditComponent;