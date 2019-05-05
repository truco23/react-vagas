import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const VagaPageDetalhesComponent = lazy(() => import('./pages/vagas-pages/VagaPageDetalhesComponent'));
const VagasRoutes = () => (
        <Route>
            <Switch>
                <Route path="/vaga/:id" component={ VagaPageDetalhesComponent } />
            </Switch>
        </Route>
);

export default VagasRoutes;