import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardComponent extends Component {
    
    render() { 
        const { id, title, description } = this.props;
        return (  
        <section className="card">
            <header className="card-header bg-primary text-white text-center">
                { title }
            </header>
            <div className="card-body">
                <p className="card-text">{ description }</p>
                <Link to={ `${ id }` } className="btn btn-info col-6">Editar</Link>
                <button className="btn btn-danger col-6">Remover</button>
            </div>
        </section>
        );
    }
}
 
export default CardComponent;