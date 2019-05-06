import React, { Component } from 'react';
import VagasInputComponent from '../vagas-input/VagasInputComponent';
import SelectComponent from '../../../../shared/components/select/SelectComponent';
import ApiMethods from '../../../../shared/services/api/ApiMethods';

const apiMethods = new ApiMethods();

class VagaFormEditComponent extends Component {
    
    state = {

        title: '',
        description: '',
        idCategory: ''
    };

    async componentDidMount() {

        const { id } = this.props.props.match.params;
        const vaga = await apiMethods.get(`vagas/${ id }`);
        const { title, description, idCategory } = vaga;
        
        this.setState({ title, description, idCategory });
    }
    
    handleSubmit = e => {
        
        e.preventDefault();
        console.log('Editar');

        console.log(this.state.title);
        console.log(this.state.description);
        console.log(this.state.idCategory);
    };

    handleInputChange = e => {

        let input = e.target.name;
        let value = e.target.value;
        
        this.setState({ [input]: value });
    };

    render() { 
        const { title, description, idCategory } = this.props.vaga;

        return (  
            <form onSubmit={ this.handleSubmit.bind(this) } >
                <fieldset>
                    <VagasInputComponent 
                        label="Título da vaga:"
                        title={ title }
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
                        title={ description }
                        id="description"
                        name="description"
                        type="text"
                        erroId="descriptionHelp"
                        placeholder="Digite a descrição da vaga aqui"
                        erroMsg="Descrição da vaga obrigatório"
                        onchange={ this.handleInputChange.bind(this) }
                        title={ this.state.description } 
                    />

                    <SelectComponent idCategory={ idCategory } onchange={ this.handleInputChange.bind(this) } />

                </fieldset>

                <fieldset>
                    <button type="submit" className="btn btn-success">Salvar</button>
                </fieldset>
            </form>
        );
    }
}
 
export default VagaFormEditComponent;