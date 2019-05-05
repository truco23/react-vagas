import React, { Component } from 'react';

class VagasInputComponent extends Component {
    
    render() { 
        const { label, title, id, type, name, erroId, placeholder, erroMsg, onchange } = this.props;

        return (  
            <div className="form-group">
                <label htmlFor={ id }>{ label }</label>
                <input 
                    type={ type } 
                    className="form-control" 
                    id={ id } 
                    name={ name }
                    aria-describedby={ erroId }
                    placeholder={ placeholder } 
                    value={ title }  
                    onChange={ onchange } />
                
                <small 
                    id={ erroId }
                    className="form-text text-muted">
                    { erroMsg }
                </small>
            </div>
        );
    }
}
 
export default VagasInputComponent;