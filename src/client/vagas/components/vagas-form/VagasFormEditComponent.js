import React, { Component } from 'react';
import VagasInputComponent from '../vagas-input/VagasInputComponent';
import SelectComponent from '../../../../shared/components/select/SelectComponent';

class VagaFormEditComponent extends Component {
    
    render() { 
        
        console.log(this.props.vaga);
        const { title, description, idCategory } = this.props.vaga;

        return (  
            <form>
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
                    />

                    <SelectComponent idCategory={ idCategory } />

                </fieldset>

                <fieldset>
                    <button type="submit" className="btn btn-success">Salvar</button>
                </fieldset>
            </form>
        );
    }
}
 
export default VagaFormEditComponent;