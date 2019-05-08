import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LocalStorageService from '../../services/localStorage/LocalStorageService';

const methodsLocalStorage = new LocalStorageService();

class CardComponent extends Component {

    state = {
        logged: false
    };

    async componentDidMount() {

        if(methodsLocalStorage.isLogged()) {
            
            await this.setState({ logged: true });
            return;
        }

        this.setState({ logged: false });
    }
    
    render() { 
        const { id, title, description, remove } = this.props;
        const { logged } = this.state;

        return (  
            <section className="card">
                <header className="card-header bg-light text-center">
                    { title }
                </header>
                <div className="card-body">
                    <p className="card-text">{ description }</p>
                    {
                        logged
                        ? <div>
                            <Link to={ `${ id }` } className="btn btn-info col-6">Editar</Link>
                            <button className="btn btn-danger col-6" onClick={ remove }>Remover</button>
                        </div>
                        : ''
                    }
                
                </div>
            </section>
        );
    }
}
 
export default CardComponent;