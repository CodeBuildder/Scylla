import React from "react";
import Dashboard from "./pages/Dashboard.jsx";
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    
      <Router>
        <Switch>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    
  );
}

export default App;
