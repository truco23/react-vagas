import React, { Component } from 'react';
import FormLoginComponent from '../../components/form-login/FormLoginComponent';

class LoginPagesComponent extends Component {
    
    render() { 
        return (  
            <section className="container">
                <FormLoginComponent props={ this.props } />
            </section>
        );
    }
}
 
export default LoginPagesComponent;