import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const VagasPageDetalhesComponent = lazy(() => import('./pages/vagas-pages/VagasPageDetalhesComponent'));
const VagasRoutes = () => (
        <Route>
            <Route path="/vagas/:id" component={ VagasPageDetalhesComponent } />
        </Route>
);

export default VagasRoutes;