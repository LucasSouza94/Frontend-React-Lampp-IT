import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Empresas from './views/Empresas';
import Pagina404 from './views/Pagina404';
import MostrarEmpresa from './views/MostrarEmpresa';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App}/>
      <Route path="/empresas" component={Empresas}/>
      <Route path="/empresa/novo" component={MostrarEmpresa}/>
      <Route path="/empresa/:id" component={MostrarEmpresa}/>
      <Route path="*" component={Pagina404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// 
reportWebVitals();
