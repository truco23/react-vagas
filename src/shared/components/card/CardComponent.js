import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CardComponent extends Component {
    
    render() { 
        const { id, title, description } = this.props;
        return (  
        <section className="card">
            <header className="card-header bg-info text-white text-center">
                { title }
            </header>
            <div className="card-body">
                <p className="card-text">{ description }</p>
                <Link to={ `${ id }` } className="btn btn-primary">Visualizar</Link>
            </div>
        </section>
        );
    }
}
 
export default CardComponent;