import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

class Support extends Component {
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

        this.props.history.push('/Comments');
    }



    render() {
        return (
            <>
                <div>
                    <h1>How well are you being supported today?</h1>
                    <form onSubmit={this.handleClick}>
                        <input required type="radio" id="1" name="support" value="1"
                            onChange={(event) => this.handleChangeFor('support', event)} />
                        <label for="1">1</label>
                        <input required type="radio" id="2" name="support" value="2"
                            onChange={(event) => this.handleChangeFor('support', event)} />
                        <label for="2">2</label>
                        <input required type="radio" id="3" name="support" value="3"
                            onChange={(event) => this.handleChangeFor('support', event)} />
                        <label for="3">3</label>
                        <input required type="radio" id="4" name="support" value="4"
                            onChange={(event) => this.handleChangeFor('support', event)} />
                        <label for="4">4</label>
                        <input required type="radio" id="5" name="support" value="5"
                            onChange={(event) => this.handleChangeFor('support', event)} />
                        <label for="5">5</label>
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

export default connect(putReduxStateOnProps)(Support);