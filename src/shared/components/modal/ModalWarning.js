import React, { Component } from 'react';

class ModalWarning extends Component {
    
    state = {

        modal: this.props.show,
    };

    handleToggleModal = () => {

        this.setState({ modal: !this.state.modal });
        console.log(!this.state.modal);
    };

    render() { 
        const { modal } = this.state;

        return (  
            <div>
                <button type="button" className="btn btn-primary" onClick={ this.handleToggleModal }>
                Abrir modal de demonstração
                </button>

                <div className={ `${ modal ? 'd-block' : 'd-none' }` } id="modalExemplo" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <header className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Título do modal</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Fechar">
                                <span aria-hidden="true">&times;</span>
                                </button>
                            </header>
                            <div className="modal-body">
                                ...
                            </div>
                            <footer className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Fechar</button>
                                <button type="button" className="btn btn-primary">Salvar mudanças</button>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ModalWarning;