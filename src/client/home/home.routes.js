import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const HomePageComponent = lazy(() => import('./pages/home-pages/HomePageComponent'));
const HomeRoutes = () => (
    <Route>
        <Route path="/vagas" component={ HomePageComponent } />
    </Route>
);

export default HomeRoutes;