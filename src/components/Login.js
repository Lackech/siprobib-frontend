import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionCreators from '../store/Login';

export class Login extends Component {

    componentDidMount(){
        console.log('Holaa');
        console.log(this.props.name);
        
    }
    
    render() {
        
        return (
            <div>
                Hello
            </div>
        )
    }
}

export default connect(
    state => state.login,
    dispatch => bindActionCreators(actionCreators, dispatch)
)(Login);