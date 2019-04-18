import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePageComponent from './client/home/pages/home-pages/HomePageComponent';
import VagasRoutes from './client/vagas/vagas.routes';

const AppRoutes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={ HomePageComponent } />
            <VagasRoutes /> 
        </Switch>
    </BrowserRouter>
)

export default AppRoutes;
