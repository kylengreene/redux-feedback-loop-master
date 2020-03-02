import React, { Component } from 'react';
import '../App/App.css';
import { connect } from 'react-redux';
import Axios from 'axios';
import swal from 'sweetalert';


class Review extends Component {
    axiosPostFunction = (input) => {
        Axios({
            method: 'POST',
            url: '/submitted',
            data: input
        }).then(response => {
            console.table(response);
        }).catch(error => {
            console.log('error with order POST', error);
            alert('error with order POST');
        });
        this.props.history.push('/');
        this.props.dispatch({
            type: 'RESET_RESPONSE'
        });
    }

    handleClick = () => {
        swal("Feedback submitted!");
        const array = this.props.reduxState.responseReducer
        let objectToSend = {
            feeling: array[0].feeling,
            understanding: array[1].understanding,
            support: array[2].support,
            comments: array[3].comments,
        }
        this.axiosPostFunction(objectToSend);
    } 
    render(){
      
    return(
      <div className = "Review" >
            <table>
                <thead>
                    <tr>
                        <th>  Feeling Rating  </th>
                        <th>  Understanding Rating  </th>
                        <th>  Support Rating  </th>
                        <th>  Added Comments  </th>
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