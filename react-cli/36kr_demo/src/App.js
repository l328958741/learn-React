import React, { Component } from 'react';
import {BrowserRouter, Router, Switch, Route} from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'

import List from './List'
import Detail from './detail'

import store from './store'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Switch>
            <Route exact path="/" component={List} />
            <Route path="/detail/:id" component={Detail} />
          </Switch>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
