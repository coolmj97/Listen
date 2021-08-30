import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import './App.css';
import Home from './routes/Home';
import Detail from './routes/Detail';
import Control from './components/Control';

const App = () => {
  return (
    <>
      <HashRouter>
        <Route path="/" exact={true} component={Home} />
        <Route path="/detail/:id" exact={true} component={Detail} />
      </HashRouter>
      <Control />
    </>
  );
};

function mapStateToProps(store) {
  return {
    selectedData: store.handleMusic,
  };
}

export default connect(mapStateToProps)(App);
