import React, { Component } from "react"
import MapIcon from '@material-ui/icons/Map';

import withStyles from "@material-ui/core/styles/withStyles";
import ToggleStyle from "components/Map/ToggleStyle";

class LeafletMapToggle extends Component {
	render(){
		let { classes } = this.props;
		return (
			<div className={classes.container}>
				<span>Toggle Base Maps</span>
				<MapIcon />
			</div>
		)
	}
}

export default withStyles(ToggleStyle)(LeafletMapToggle);