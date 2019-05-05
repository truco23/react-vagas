import React, { Component } from 'react';

import ApiMethods from '../../services/api/ApiMethods';

const apiMethods = new ApiMethods();

class SelectComponent extends Component {

    state = {
        categorias: []
    };

    async componentDidMount() {

        const categorias = await apiMethods.get('categorias');
        this.setState({ categorias })    
        console.log(this.state.categorias);
    }
    
    render() { 
        const { categorias } = this.state;
        const { idCategory } =  this.props;
        const selected = false;

        return (  
            <div className="form-group">
            { idCategory }
                <select className="form-control" name="categoria">
                    <option value="">Selecione um categoria</option>
                    {
                        categorias.length && categorias.map(categoria => (
                            <option 
                                selected={ categoria._id === idCategory }
                                key={ categoria._id } 
                                value={ categoria.name.toLowerCase() }>
                                { categoria.name }
                            </option>
                        ))
                    }
                </select>
            </div>
        );
    }
}
 
export default SelectComponent;