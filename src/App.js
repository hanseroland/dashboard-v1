import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import AppRoutes from './pages/AppRoutes';
import Dashboard from './pages/Dashboard';
import AdminLayout from './pages/AdminLayout';
import Utilisateurs from './pages/Utilisateurs';
import Poste from './pages/Poste';
import Produits from './pages/Produits';
import Messages from './pages/Message';
import Confidentialites from './pages/Confidentialites';
import Profil from './pages/Profil';
import Erreur from './pages/Erreur';


function App() { 
  return (
    <>
      <Router >
          <Switch>
              <AppRoutes exact path="/" component={Dashboard} layout={AdminLayout}  />
              <AppRoutes path="/utilisateurs" component={Utilisateurs} layout={AdminLayout}  />
              <AppRoutes path="/postes" component={Poste} layout={AdminLayout}  />
              <AppRoutes path="/produits" component={Produits} layout={AdminLayout}  />
              <AppRoutes path="/messages" component={Messages} layout={AdminLayout}  />
              <AppRoutes path="/confidentialites" component={Confidentialites} layout={AdminLayout}  />
              <AppRoutes path="/profil" component={Profil} layout={AdminLayout}  />
              <Route component={Erreur} />
          </Switch>
      </Router>
    </>
  );
}

export default App;
