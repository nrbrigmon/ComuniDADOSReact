import React, { Component} from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

import withStyles from "@material-ui/core/styles/withStyles";
import ToggleStyle from "components/Map/ToggleStyle";
import MapIcon from '@material-ui/icons/Map';


class LeafeletMapToggle extends Component {
		state = {
			open: false,
			anchorEl: null
		}

		_handleMouseClick = (action, baseMapSelection) => {
			//we only have 3 base maps so the toggle will select numbers 0, 1, 2
			baseMapSelection = (baseMapSelection+1) % 3;
			// console.log(baseMapSelection)
			action(baseMapSelection)
		}

		_handlePopoverOpen = (event) => {
				this.setState({ 
					anchorEl: event.currentTarget, 
					open: true 
				});
		}

		_handlePopoverClose = () => {
				this.setState({ 
					anchorEl: null, 
					open: false  
				});
		}

		render() {
				let { classes, preferredLanguage, action, baseMapSelection } = this.props;
				let popUpText = ( preferredLanguage === 'en' ? "Toggle Base Map" : "Alterar Mapa Base" )
				return (
						<Paper className={classes.container}
						onMouseEnter={this._handlePopoverOpen}
						onMouseLeave={this._handlePopoverClose}
						onClick={() => this._handleMouseClick(action, baseMapSelection)}
						>
								<Typography
										className={classes.interior} 
										>
										<MapIcon/>
								</Typography>
								<Popover
										id="mouse-over-popover"
										className={classes.popover}
										classes={{
											paper: classes.paper,
										}}
										open={this.state.open}
										anchorEl={this.state.anchorEl}
										anchorOrigin={{
											vertical: 6,
											horizontal: 'center'
										}}
										transformOrigin={{
											vertical: 'top',
											horizontal: 'center',
										}}
										onClose={this._handlePopoverClose}
										disableRestoreFocus>
										<Typography className={classes.text}> { popUpText } </Typography>
										
								</Popover>
						</Paper>
				);
		}
}
export default withStyles(ToggleStyle)(LeafeletMapToggle);