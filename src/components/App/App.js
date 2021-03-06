import React, { Component } from 'react';
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
  emptyResponse = () =>{
    this.props.dispatch({
      type: 'RESET_RESPONSE'
    });
  }
  render() {
    return (
      <div className="App">
        <Router>
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
        </header>
        <br/>
          <Link className="nextButton" to="/Feeling" onClick={this.emptyResponse} >Begin</Link>

          <Route exact path="/Comments" component={Comments} />
          <Route exact path="/Feeling" component={Feeling} />
          <Route exact path="/Review" component={Review} />
          <Route exact path="/Submitted" component={Submitted} />
          <Route exact path="/Support" component={Support} />
          <Route exact path="/Understanding" component={Understanding} />
        </Router>
      </div>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState
})

export default connect(putReduxStateOnProps)(App);
