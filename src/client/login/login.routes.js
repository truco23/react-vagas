import React, { lazy } from 'react';
import { Route } from 'react-router-dom';

const LoginPagesComponent = lazy(() => import('./pages/login-pages/LoginPagesComponent'));
const LoginRoutes = () => (
    <Route>
        <Route exact path="/" component={ LoginPagesComponent } />
    </Route>
);

export default LoginRoutes;