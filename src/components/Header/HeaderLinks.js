import React, { Component } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import * as _utils from "utils/nav_utils"
import indexRoutes from "routes/indexRoutes";

class HeaderLinks extends Component {
  render() {

    return (
      <List>
        {indexRoutes.map((elem, idx) => (
					<ListItem button 
						key={idx} 
						onClick={ ()=>{ 
								_utils.navigateTo(elem.path.substr(1), this.props);
								this.props.toggleDrawer(!this.props.navDrawer);
								
								} }>
            <ListItemText primary={elem.name}  />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default HeaderLinks;
