import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

class Feeling extends Component {
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default connect(putReduxStateOnProps)(Feeling);