import logo from './logo.svg';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './containers/Header'
import { Provider } from 'react-redux'
import store from './store'
import Footer from './containers/Footer'
import { Contact } from './components/Contact';
import About from './components/About'
import Products from './components/Products'
import Cart from './components/Cart'
import { Home } from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Provider store={store}>
          <Header/>
              <Switch>
                <Route exact path="/" component={Home} /> 
                <Route path="/products" component={Products} />   
                <Route path="/about"><About/> </Route>
                <Route path="/cart" component={Cart} />


                {/* <Route path="/login">
                  <LoginPage/>
               </Route>
                <PrivateRoute path="/checkout">
                    <CheckoutPage />
                </PrivateRoute> */}
              </Switch>
          <Footer/>
          </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
