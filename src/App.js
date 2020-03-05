import React, {Component} from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Login from './components/Login';
import Buscador from './components/Buscador';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <Layout>          
          <Route exact path='/' component={Inicio} />
          <Route path='/nosotros' component={Nosotros} />
          <Route path='/contact' component={Contact} />
          <Route path='/login' component={Login} />
          <Route path='/buscador' component={Buscador} />
        </Layout>
      </BrowserRouter>      
    );
  }  
}

export default App;
