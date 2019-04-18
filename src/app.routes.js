import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomeComponent from './client/pages/home/HomeComponent';
import VagasDetalhesComponent from './client/pages/vagas/VagasDetalhesComponent';

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ HomeComponent } />
            <Route path="/vagas/:id" component={ VagasDetalhesComponent } />
        </Switch>
    </BrowserRouter>
)

export default AppRoutes;
