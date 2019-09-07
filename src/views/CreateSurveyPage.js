import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "actions";

class CreateSurveyPage extends Component {
	
	componentDidMount(){
		this.props.setLocation(this.props.history)
	}

  render() {
    return <div>CreateSurveyPage</div>;
  }
}

export default connect(
  null,
  actions
)(CreateSurveyPage);

