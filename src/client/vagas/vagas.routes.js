import React from 'react';
import { Route } from 'react-router-dom';

import VagasPageDetalhesComponent from './pages/vagas-pages/VagasPageDetalhesComponent';

const VagasRoutes = () => (
    <Route >
        <Route path="/vagas/:id" component={ VagasPageDetalhesComponent } />
    </Route>
);

export default VagasRoutes;