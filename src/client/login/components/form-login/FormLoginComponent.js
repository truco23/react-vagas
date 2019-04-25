import React, { Component } from 'react';

class FormLoginComponent extends Component {
    state = {  }
    render() { 
        return (  
            <form>
                <fieldset>
                    <div className="form-group">
                        <label for="email">Digite o seu e-mail</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Digite o seu e-mail aqui" />
                        <small id="emailHelp" className="form-text text-muted">E-mail obrigatório</small>
                    </div>
                    <div className="form-group">
                        <label for="password">Digite a sua senha</label>
                        <input type="password" className="form-control" id="password" placeholder="Password" aria-describedby="passwordHelp" />
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