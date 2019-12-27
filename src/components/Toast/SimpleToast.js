import React, { Component } from "react";
import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import InfoIcon from '@material-ui/icons/Info';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import withStyles from "@material-ui/core/styles/withStyles";
import SimpleToastStyle from "components/Toast/SimpleToastStyle"

class SimpleToast extends Component {
    
    handleClose = (event, reason) => {
        // if (reason === 'clickaway') {
            // this.props.
        // }
        // debugger;
        this.props.closeToast()
        // console.log(event, reason)
    };

    renderMessage = (classes, msg, type) => {
        let icon = ( type === 'success' ? <CheckCircleIcon className={classes.icon}/> : 
                    type === 'info' ? <InfoIcon className={classes.icon}/>  : <ErrorIcon className={classes.icon}/> )
        return (
            <span id="message-id" className={classes.message}>
                {icon}
                <span>{msg}</span> 
            </span>
        )   
    }

    render(){
        let { display, message, type, classes } = this.props
        // console.log(type)
        return(
            <Snackbar
                autoHideDuration={4000}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                open={display}
                onClose={this.handleClose}
                ContentProps={{
                    'aria-describedby': 'message-id',
                }}
            >
                <SnackbarContent
                    className={classes[type]}
                    aria-describedby="client-snackbar"
                    message={this.renderMessage(classes, message, type)}
                    />
            </Snackbar>
        )
    } 
}

export default withStyles(SimpleToastStyle)(SimpleToast);