import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "actions";

class NotFound404 extends Component {
	
	componentDidMount(){
		this.props.setLocation(this.props.history)
	}

  render() {
    return <div>404 Not Found</div>;
  }
}

export default connect(
  null,
  actions
)(NotFound404);

