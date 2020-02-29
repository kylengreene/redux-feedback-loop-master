import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

class Support extends Component {
    render() {

        return;
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default connect(putReduxStateOnProps)(Support);