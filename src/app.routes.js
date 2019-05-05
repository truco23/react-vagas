import React, {Component, Suspense, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import VagasRoutes from './client/vagas/vagas.routes';
import HomeRoutes from './client/home/home.routes';
import LoginRoutes from './client/login/login.routes';
const LoginPagesComponent = lazy(() => import('./client/login/pages/login-pages/LoginPagesComponent'));
const HomePageComponent = lazy(() => import('./client/home/pages/home-pages/HomePageComponent'));
const VagaPageDetalhesComponent = lazy(() => import('./client/vagas/pages/vagas-pages/VagaPageDetalhesComponent'));

export default class AppRoutes extends Component {
    
    render() {
        return (
            <Suspense fallback={ '<h1>Carregando, aguarde...</h1>' }>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={ LoginPagesComponent } />
                        <Route path="/vagas" component={ HomePageComponent } />
                        <Route path="/vaga/:id" component={ VagaPageDetalhesComponent } />
                            {/* <LoginRoutes />
                            <HomeRoutes />
                            <VagasRoutes />  */}
                    </Switch>
                </BrowserRouter>
            </Suspense>
        );
    }
};