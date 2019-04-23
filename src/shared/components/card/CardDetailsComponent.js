import React, { Component } from 'react';

class CardDetailsComponent extends Component {
    
    render() { 
        const { title, description } = this.props;

        return (  
        <section className="card">
            <header className="card-header bg-info text-white text-center">
                { title }
            </header>
            <div className="card-body">
                <p className="card-text">{ description }</p>
            </div>
        </section>
        );
    }
}
 
export default CardDetailsComponent;