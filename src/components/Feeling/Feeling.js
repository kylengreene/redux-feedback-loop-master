import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

class Feeling extends Component {
    state = null;

    handleChangeFor = (propertyName, event) => {
        console.log('logging from handleChangeFor', event.target.value);
        this.setState({
            feeling: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_RESPONSE',
            payload: this.state
        })
        console.log('logging payload from SET_RESPONSE', this.state);

        this.props.history.push('/Understanding');
    }



    render() {
        return (
            <>
                <div>
                    <h1>How are you feeling today?</h1>
                    <form onSubmit={this.handleClick} required>
                        <input required type="radio" id="1" name="feeling" value="1"
                            onChange={(event) => this.handleChangeFor('feeling', event)} />
                        <label for="1">1</label>
                        <input required type="radio" id="2" name="feeling" value="2"
                            onChange={(event) => this.handleChangeFor('feeling', event)} />
                        <label for="2">2</label>
                        <input required type="radio" id="3" name="feeling" value="3"
                            onChange={(event) => this.handleChangeFor('feeling', event)} />
                        <label for="3">3</label>
                        <input required type="radio" id="4" name="feeling" value="4"
                            onChange={(event) => this.handleChangeFor('feeling', event)} />
                        <label for="4">4</label>
                        <input required type="radio" id="5" name="feeling" value="5"
                            onChange={(event) => this.handleChangeFor('feeling', event)} />
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

export default connect(putReduxStateOnProps)(Feeling);