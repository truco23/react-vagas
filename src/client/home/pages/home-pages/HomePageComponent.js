import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import socket from 'socket.io-client'; 
import ApiMethods from '../../../../shared/services/api/ApiMethods';
import CardComponent from '../../../../shared/components/card/CardComponent';
import JumbotronComponent from '../../../../shared/components/jumbotron/JumbotronComponent';
import MenuComponent from '../../../../shared/components/menu/MenuComponent';
import LocalStorageService from '../../../../shared/services/localStorage/LocalStorageService';
import ModalWarning from '../../../../shared/components/modal/ModalWarning';

const apiMethods = new ApiMethods();
const apiLocalStorage = new LocalStorageService();

class HomePageComponent extends Component {

    state = {
        vagas: [],
        infoPages: [],
        token: '',
        page: 1,
        modal: false
    };

    async componentDidMount() {
        
        this.loadVagas();
        this.saveToken();
    };
    
    loadVagas = async (page = 1) => {
        
        let response = await apiMethods.get(`vagas?page=${ page }`);
        const { docs, ...infoPages } = response;
    
        this.setState({ vagas: docs, infoPages, page });
        console.log(this.state.vagas);
        console.log(this.state.infoPages);

        this.realTime()
    }

    realTime = () => {

        let newList = this.state.vagas;
        const io = socket('http://localhost:3001');
        
        this.realTimeNew(newList, io);
        this.realTimeUpdate(newList, io);
        this.realTimeRemove(newList, io);
    };
    
    realTimeNew(newList, io) {

        io.on('vaga-new', vaga => {

            newList.unshift(vaga);
            this.setState({ vagas: newList });
        });
    };

    realTimeUpdate = (newList, io) => {

        
        io.on('vaga-edit', vaga => {

            for(let data of newList) {

                if(data._id === vaga._id) {

                    data._id = vaga._id;
                    data.createdAt = vaga.createdAt;
                    data.description = vaga.description;
                    data.idCategory = vaga.idCategory;
                    data.title = vaga.title;
                    data.updatedAt = vaga.updatedAt;
                }
            };
            
            this.setState({ vagas: newList });
        });
    };

    realTimeRemove = (newList, io) => {

        io.on('vaga-remove', vaga => {
            
            for(let item of newList) {

                if(item._id === vaga._id) {
                    
                    let indice = newList.indexOf(item);
                    newList.splice(indice, 1);
                    this.setState({ vagas: newList });
                    return;
                }
            };
        });
    };

    saveToken = () => {

        const token = apiLocalStorage.getToken();

        if(token) {
            this.setState({ token });
        };
    };

    handleRemove = async (id, vaga) => {
        
        if(window.confirm('Dejea realmente remover essa vaga?')) {

            try {
                
                const res = await apiMethods.delete(`vagas/${ id }`, { token: this.state.token })
                
                if(res.success) {
                    
                    let newList = this.state.vagas.slice(0);
                    let indice = newList.indexOf(vaga);
                    newList.splice(indice, 1);        
                    
                    this.setState({ vagas: newList });
                    alert('Vaga removida com sucesso');
                    return;
                }
            } catch (error) {
                console.log(error.message);
            }
        }
    };

    handlePrevPage = () => {

        console.log('anterior');
        
        const { page, infoPages } = this.state;

        console.log(page);
        console.log(infoPages);

        if(page === 1) return;

        const pageNumber = page - 1;

        this.loadVagas(pageNumber);
    }

    handleNextPage = () => {

        console.log('proxima');
        const { page, infoPages } = this.state;

        console.log(page);
        console.log(infoPages);

        if(page === infoPages.pages) return;

        const pageNumber = page + 1;

        console.log(pageNumber);

        this.loadVagas(pageNumber);
    };
    
    render() { 
        const { vagas, token, modal } = this.state;

        return (
            <section className="container">
                <ModalWarning show={ modal } />
                <MenuComponent />
                <JumbotronComponent title="Vagas em aberto" />

                {
                    token
                    ? <Link to="/vaga/new" className="btn btn-success">Cadastrar</Link>
                    : ''
                }

                <ul className="list-unstyled row">
                    {
                        vagas && vagas.map(vaga => {

                            return(
                                <li key={ vaga._id } className="mt-2 col-sm-12 col-md-6 col-lg-4">
                                    <CardComponent  
                                        title={ vaga.title }
                                        description={ vaga.description }
                                        id={ `/vaga/${ vaga._id }` }
                                        remove={ this.handleRemove.bind(this, vaga._id, vaga) }
                                    />
                                </li>
                            )
                        })
                    }
                </ul>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" disabled={ this.state.page === 1 } onClick={ this.handlePrevPage }>Anterior</button>
                    <button className="btn btn-primary" disabled={ this.state.page === this.state.infoPages.pages } onClick={ this.handleNextPage }>Proxima</button>
                </div>
            </section>
        );
    }
}
 
export default HomePageComponent;