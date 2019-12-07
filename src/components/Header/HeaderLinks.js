import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { navigateTo } from "utils/nav_utils";
import indexRoutes from "routes/indexRoutes";

class HeaderLinks extends Component {
	listItemAction = (e, elem) => {
		let { enName, prName } = elem //content of list item
		let { preferredLanguage } = this.props; //the language selected
		
		if (enName === "PORTUGUÊS" || prName === "ENGLISH"){
			// if the toggle language button was clicked, we want to stay on the same page
			// if the current language is english, switch to portuguese and visaversa
			let newLanguage = (preferredLanguage === 'en' ? 'pr' : 'en')
			this.props.setLanguage(newLanguage);
			this.props.translateMetric(newLanguage);
		} else {
			// if it was anything else continue routing function
			navigateTo(elem.path.substr(1), this.props); //navigate to path of given route - the "/"
		}
		this.props.toggleDrawer(!this.props.navDrawer); //clicking this will toggle the drawer state
	}

  render() {
		let { preferredLanguage, userInfo, classes } = this.props; //the language selected
		let { pathname } = this.props.navLocation.location; //the current page
		let selectedColor = { color: "#3f51b5" };
		let selectedBg = { backgroundColor: 'rgba(0, 0, 0, 0.05)'};
		let defaultStyle = { backgroundColor: 'inherit', color:'inherit' };
		let loggedIn = ( userInfo.token.length >= 3 ? true : false);
    return (
      <List className={classes.drawer}>
				
        {
					indexRoutes.map((elem, idx) => {
						let skip = false;
						if ( loggedIn && elem.path === '/login'){
							//then user is logged in do not show /login path/component
							skip = true; 
						} else if ( !loggedIn && elem.path === '/home'){
							//then user is not logged in do not show /home path/component
							skip = true; 
						}
					//if there is no path available or the logic says skip...
						return ( elem.path === false || skip === true ? <div key={idx} /> : 
							<ListItem 
								button 
								key={idx} 
								// divider={true}
								// disabled={pathname === elem.path}
								selected={pathname === elem.path} 
								style={pathname === elem.path ? {...selectedColor, ...selectedBg } : defaultStyle } 
								onClick={(e) => this.listItemAction(e, elem) } >

									<ListItemIcon 
										style={pathname === elem.path ? selectedColor : defaultStyle }  > 
									{ elem.icon } 
									</ListItemIcon>
										{	
											//choose correct menu item text based on preferred language
											<ListItemText primary={( preferredLanguage === 'en' ? elem.enName : elem.prName )} /> 
										}
							</ListItem>
							)}
						)
					
				}
      </List>
    );
  }
}

export default HeaderLinks;
