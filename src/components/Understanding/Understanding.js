import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';

class Understanding extends Component {
    state = null;

    handleChangeFor = (propertyName, event) => {
        console.log('logging from handleChangeFor in understanding', event.target.value);
        this.setState({
            understanding: event.target.value
        })
    }

    handleClick = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'SET_RESPONSE',
            payload: this.state
        })
        console.log('logging payload from SET_RESPONSE in understanding', this.state);

        this.props.history.push('/Support');
    }

    render() {

        return (
            <>
                <div>
                    <h1>How well are you understanding the content?</h1>
                    <form onSubmit={this.handleClick}>
                        <input required type="radio" id="1" name="understanding" value="1"
                            onChange={(event) => this.handleChangeFor('understanding', event)} />
                        <label for="1">1</label>
                        <input required type="radio" id="2" name="understanding" value="2"
                            onChange={(event) => this.handleChangeFor('understanding', event)} />
                        <label for="2">2</label>
                        <input required type="radio" id="3" name="understanding" value="3"
                            onChange={(event) => this.handleChangeFor('understanding', event)} />
                        <label for="3">3</label>
                        <input required type="radio" id="4" name="understanding" value="4"
                            onChange={(event) => this.handleChangeFor('understanding', event)} />
                        <label for="4">4</label>
                        <input required type="radio" id="5" name="understanding" value="5"
                            onChange={(event) => this.handleChangeFor('understanding', event)} />
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

export default connect(putReduxStateOnProps)(Understanding);