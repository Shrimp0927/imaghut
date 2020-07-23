import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';
const Landing = () => <div>Landing</div>;
const Dashboard = () => <div>Dashboard</div>

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Route path="/" exact component={Landing} />
        <Route path="/dashboard" component={Dashboard} />
      </div>
    )
  }
}

export default App;
