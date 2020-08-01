import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home';
import CadastroDeVideo from './pages/cadastro/video'
import CadastroDeCategoria from './pages/cadastro/categoria';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path='/' component={Home} exact/>
      <Route path='/cadastro/video' component={CadastroDeVideo} exact/>
      <Route path='/cadastro/categoria' component={CadastroDeCategoria} exact/>
      <Route component={() => (<div>Erro 404</div>)}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
