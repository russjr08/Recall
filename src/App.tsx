import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
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
    console.log(`EXTERNAL_SUBDIRECTORY: ${process.env.EXTERNAL_SUBDIRECTORY}`);
    console.log(`REACT_APP_EXTERNAL_SUBDIRECTORY: ${process.env.REACT_APP_EXTERNAL_SUBDIRECTORY}`);
  }

  render() {
    return (
      <Router basename={`${process.env.REACT_APP_EXTERNAL_SUBDIRECTORY}`}>
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
