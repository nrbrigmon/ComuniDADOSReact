import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import * as _utils from "utils/nav_utils"
import indexRoutes from "routes/indexRoutes";

class HeaderLinks extends Component {
  render() {
		let { preferredLanguage, classes } = this.props; //the language selected
		let { pathname } = this.props.navLocation.location; //the current page
		// console.log(this.props)
    return (
      <List className={classes.drawer}>
				
        {
					indexRoutes.map((elem, idx) => (
					//continue if there is a path available...
						( elem.path === false ? <div key={idx} /> : 
							<ListItem 
								button 
								key={idx} 
								// divider={true}
								disabled={pathname === elem.path}
								selected={pathname === elem.path}
								onClick={ (e)=>{
												let { textContent } = e.target //content of list item
												if (textContent === "ENGLISH" || textContent === "PORTUGUÊS"){
													// if the toggle language button was clicked, we want to stay on the same page
													// if the current language is english, switch to portuguese and visaversa
													let newLanguage = (preferredLanguage === 'en' ? 'pr' : 'en')
													this.props.setLanguage(newLanguage);
													this.props.translateMetric(newLanguage);
												} else {
													// if it was anything else continue routing function
													_utils.navigateTo(elem.path.substr(1), this.props); //navigate to path of given route - the "/"
												}
												this.props.toggleDrawer(!this.props.navDrawer); //clicking this will toggle the drawer state
										} } >


									<ListItemIcon >
										{ elem.icon }
									</ListItemIcon>


										{	
											//choose correct menu item text based on preferred language
											
											<ListItemText primary={( preferredLanguage === 'en' ? elem.enName : elem.prName )} /> 
										}
							</ListItem>
							)
						)
					)
				
				}
      </List>
    );
  }
}

export default HeaderLinks;
