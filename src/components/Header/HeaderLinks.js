import React, { Component } from "react";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

class HeaderLinks extends Component {
  render() {
    const link_text = ["ABOUT", "HOW TO USE", "CREATE SURVEY", "PORTUGUÊS"];

    return (
      <List>
        {link_text.map((elem, idx) => (
          <ListItem button key={idx}>
            <ListItemText primary={elem} />
          </ListItem>
        ))}
      </List>
    );
  }
}

export default HeaderLinks;
