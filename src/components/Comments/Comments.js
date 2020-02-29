import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

class Comments extends Component {
    render() {

        return;
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default connect(putReduxStateOnProps)(Comments);