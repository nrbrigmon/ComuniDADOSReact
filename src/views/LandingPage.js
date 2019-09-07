import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "actions";

class LandingPage extends Component {
	componentDidMount(){
		this.props.setLocation(this.props.history)
	}
  render() {
    return (
      <div>
        LandingPage
      </div>
    );
  }
}

export default connect(
  null,
  actions
)(LandingPage);
