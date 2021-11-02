import React, {
  lazy, ReactElement, Suspense, useEffect,
} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import NavBar from './components/NavBar';
import ErrorPage from './pages/ErrorPage';
import CallbackPage from './pages/CallbackPage';
import FullScreenSpinner from './components/elements/FullScreenSpinner';
import { version } from '../package.json';

const InventoryPage = lazy(() => import('./pages/InventoryPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));

const App = (): ReactElement => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(`LE-Inventar ${version}`);
    // eslint-disable-next-line no-console
    console.log('Developed and Maintained by IACCAM (www.iaccam.com)');
  });

  return (
    <div className="App bg-gray-50">
      <Router>
        <NavBar />
        <div className="max-w-7xl mx-auto py-6">
          <Suspense fallback={<FullScreenSpinner />}>
            <Switch>
              <Route path="/inventar" component={InventoryPage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/callback">
                <CallbackPage />
              </Route>
              <Redirect exact from="/" to="/inventar" />
              <Route path="*">
                <ErrorPage />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  );
};

export default App;
