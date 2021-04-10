import React from "react";
import Dashboard from "./pages/Dashboard.jsx";
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
