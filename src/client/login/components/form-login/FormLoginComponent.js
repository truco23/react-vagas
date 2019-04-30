import React, { Component } from 'react';
import ApiMethods from '../../../../shared/services/api/ApiMethods';

const apiMethodos = new ApiMethods();

class FormLoginComponent extends Component {
    
    state = {

        email: '',
        password: ''
    };

    handleSubmit = e => {

        e.preventDefault();

        console.log('cadastro');
        console.log(this.state.email);
        console.log(this.state.password);

        apiMethodos.post('admin', this.state.email, this.state.password);
    };

    handleInputChange = e => {

        let input = e.target.name;
        let value = e.target.value;
        
        this.setState({ [input]: value })
    };

    render() { 
        return (  
            <form onSubmit={ this.handleSubmit.bind(this) }>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="email">Digite o seu e-mail</label>
                        <input type="email" className="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Digite o seu e-mail aqui" onChange={ this.handleInputChange.bind(this) } />
                        <small id="emailHelp" className="form-text text-muted">E-mail obrigatório</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Digite a sua senha</label>
                        <input type="password" className="form-control" name="password" id="password" placeholder="Password" aria-describedby="passwordHelp" onChange={ this.handleInputChange.bind(this) } />
                        <small id="passwordHelp" className="form-text text-muted">Senha obrigatório</small>
                    </div>
                </fieldset>

                <fieldset>
                    <button type="submit" className="btn btn-primary">Entrar</button>
                </fieldset>
            </form>
        );
    }
}
 
export default FormLoginComponent;