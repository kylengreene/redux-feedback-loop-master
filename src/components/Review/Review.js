import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import Axios from 'axios';
import swal from 'sweetalert';
import ReviewItem from '../ReviewItem/ReviewItem';

class Review extends Component {
    axiosPutFunction = (input) => {
        Axios({
            method: 'POST',
            url: '/api/order',
            data: input
        }).then(response => {
            console.table(response);
        }).catch(error => {
            console.log('error with order POST', error);
            alert('error with order POST');
        });
        this.props.history.push('/pizza');
        this.props.dispatch({
            type: 'RESET_TOTAL'
        });
    }

    handleClick = () => {
        swal("Order submitted", "Pizza incoming in 3..2..1..");
        const array = this.props.reduxState.custReducer[0]
        const otherArray = this.props.reduxState.totalReducer
        let objectToSend = {
            customer_name: array.customer_name,
            street_address: array.street_address,
            city: array.city,
            zip: array.zip,
            type: array.type,
            total: otherArray
        }
        this.axiosPutFunction(objectToSend);
    } 
    render(){
      
    return(
      <div className = "Review" >
            <table>
                <thead>
                    <tr>
                        <th>Feeling Rating</th>
                        <th>Understanding Rating</th>
                        <th>Support Rating</th>
                        <th>Added Comments</th>
                    </tr>
                </thead>
                <tbody className="ReviewItem">
                    <tr key={this.props.reduxState.responseReducer.id}>
                        <td>{this.props.reduxState.responseReducer[0].feeling}</td>
                        <td>{this.props.reduxState.responseReducer[1].understanding}</td>
                        <td>{this.props.reduxState.responseReducer[2].support}</td>
                        <td>{this.props.reduxState.responseReducer[3].comments}</td>
                    </tr>
                </tbody>
                
            </table>
            <button className="submitButton" onClick={this.handleClick}>Submit Feedback!</button>
      </div>
    );
    }
}
const putReduxStateOnProps = (reduxState) => ({
    reduxState
});

export default connect(putReduxStateOnProps)(Review);