import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "actions";

class HowToPage extends Component {
	
	componentDidMount(){
		this.props.setLocation(this.props.history)
	}

  render() {
    return <div>HowToPage</div>;
  }
}

export default connect(
  null,
  actions
)(HowToPage);

