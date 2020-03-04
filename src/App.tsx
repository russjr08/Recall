import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './layout/Header'
import Home from './layout/Home'
import CreateReport from './layout/CreateReport'

import LocalDatabase from './LocalDatabase'

class App extends React.Component {

  database = new LocalDatabase()

  componentDidMount() {
    this.database.subscribe(this.onDatabaseUpdated)
  }

  render() {
    return (
      <Router>
        <div>
          <Header />
          <div className="container">
            <Switch>
              <Route path="/" exact render={(props) => <Home {...props} database={this.database} />} />
              <Route path="/reports/create" exact render={(props) => <CreateReport {...props} database={this.database} />} />
            </Switch>
            
          </div>
        </div>
      </Router>
      
    );
  }

  onDatabaseUpdated = () => {
    this.forceUpdate()
  }

  
}



export default App;
