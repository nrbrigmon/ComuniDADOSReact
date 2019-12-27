import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import LoginFormStyle from "components/LoginForm/LoginFormStyle";
import ResetFormContent from "components/LoginReset/ResetFormContent";

import LoadingLinear from "components/Animation/LoadingLinear/LoadingLinear"

class ResetFormContainer extends Component {

	render() {
		let { loadAnimation, ...rest } = this.props;
		//the only way you get a token is from the database... so this means you are logged in...
		// console.log(loadAnimation)
		// console.log(rest.userInfo)
	return (<div>
				{ loadAnimation ? <LoadingLinear /> : <span />}

					<ResetFormContent {...rest} />
			</div>
	);
	}
}

export default withStyles(LoginFormStyle)(ResetFormContainer);
