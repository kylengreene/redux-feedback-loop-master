import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

class Comments extends Component {
    state = null;

    handleChangeFor = (propertyName, event) => {
        console.log('logging from handleChangeFor', event.target.value);
        this.setState({
            support: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_RESPONSE',
            payload: this.state
        })
        console.log('logging payload from SET_RESPONSE', this.state);

        // this.props.history.push('/Review');
    }



    render() {
        return (
            <>
                <div>
                    <h1>Any comments you want to leave?</h1>
                    <form onSubmit={this.handleClick}>
                        <input required type="text" id="1" name="comments"
                            onChange={(event) => this.handleChangeFor('comments', event)} placeholder='Comments'/>
                        
                        <button type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </>
        )
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default connect(putReduxStateOnProps)(Comments);