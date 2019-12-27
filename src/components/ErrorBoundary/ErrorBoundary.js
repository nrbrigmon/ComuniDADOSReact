import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props){
        super(props)
        this.state = { error: null, errorInfo: null}
    }

    componentDidCatch(error, errorInfo){
        //catches any errors in child components
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        //here you can log other error messages
    }

    render(){
        if (this.state.errorInfo) {
            //Error route
            return (<div>
                <h3>Something went wrong :(</h3>
                <div>{this.state.error}</div>
                <div>{this.state.error.toString()}</div>
                <div>{this.state.errorInfo.componentStack}</div>
            </div>)
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;