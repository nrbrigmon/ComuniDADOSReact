import React, { Component } from 'react'
import { withStyles } from "@material-ui/core/styles"
import LinearProgress from "@material-ui/core/LinearProgress"
import LoadingLinearStyle from "components/Animation/LoadingLinear/LoadingLinearStyle"

class LoadingLinear extends Component {
    render(){
        let { classes } = this.props
        return(
            <div className={classes.root}>
                <LinearProgress color="secondary" />
            </div>
        )
    }
}

export default withStyles(LoadingLinearStyle)(LoadingLinear);