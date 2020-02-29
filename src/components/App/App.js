import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Comments from '../Comments/Comments';
import Feeling from '../Feeling/Feeling';
import Review from '../Review/Review'
import Submitted from '../Submitted/Submitted';
import Support from '../Support/Support';
import Understanding from '../Understanding/Understanding';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Router>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
          <Link className="nextButton" to="/Feeling">Begin</Link>

          <Route path="/Comments" component={Comments} />
          <Route path="/Feeling" component={Feeling} />
          <Route path="/Review" component={Review} />
          <Route path="/Submitted" component={Submitted} />
          <Route path="/Support" component={Support} />
          <Route path="/Understanding" component={Understanding} />
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(App);
