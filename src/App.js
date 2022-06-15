import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';


import Login from './components/Login';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Nuevo from './components/Nuevo';
import Editar from './components/Editar';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path="/"  element ={ <Login data={ "1" }/> } />
          <Route path="/Dashboard"  element ={<Dashboard data={ "2" }/>}/>
          <Route path="/Nuevo"  element ={<Nuevo data={ "3" }/>}/>
          <Route path="/Editar"  element ={<Editar data={ "4" }/>}/>
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
