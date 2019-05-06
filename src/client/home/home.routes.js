import React, { lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const HomePageComponent = lazy(() => import('./pages/home-pages/HomePageComponent'));
const HomeRoutes = () => (
    <Route>
        <Switch>
            <Route path="/vagas" component={ HomePageComponent } />
        </Switch>
    </Route>
);

export default HomeRoutes;