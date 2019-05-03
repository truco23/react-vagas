import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import LocalStorageService from '../../services/localStorage/LocalStorageService';

const jwt = require("jsonwebtoken");
const methodsLocalStorage = new LocalStorageService();

class MenuComponent extends Component {

    state = {
        email: ''
    }
    
    async componentDidMount() {

        if(methodsLocalStorage.hasToken()) {

            const token = await methodsLocalStorage.getToken();
            const decoded = jwt.decode(token);

            this.setState({ email: decoded.email })
            return;
        }

        console.log('não possui token');
    };

    render() { 
        const { email } = this.state;

        return (  
            <nav>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/vagas">Vagas</Link>
                    </li>
                    <li>
                        {
                            email.length
                            ?   <span>
                                    { email } 
                                    <Link to="/"  onClick={ methodsLocalStorage.removeToken } className="pl-1">Sair</Link>
                                </span> 
                            : <Link to="/">Fazer login</Link>
                        }
                    </li>
                </ul>
            </nav>
        );
    }
}
 
export default MenuComponent;