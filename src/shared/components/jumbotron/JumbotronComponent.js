import React, { Component } from 'react';

class JumbotronComponent extends Component {
    
    render() { 
        const { title } = this.props;

        return (  
            <header className="jumbotron text-center">
                <h1>{ title }</h1>
            </header>
        );
    }
}
 
export default JumbotronComponent;