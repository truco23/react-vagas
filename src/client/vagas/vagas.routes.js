import React, { lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';

// import VagasPageDetalhesComponent from './pages/vagas-pages/VagasPageDetalhesComponent';

const VagasPageDetalhesComponent = lazy(() => import('./pages/vagas-pages/VagasPageDetalhesComponent'));

const VagasRoutes = () => (
    <Suspense fallback={ '<h1>Carregando, aguarde...</h1>' }>
        <Route>
            <Route path="/vagas/:id" component={ VagasPageDetalhesComponent } />
        </Route>
    </Suspense>
);

export default VagasRoutes;