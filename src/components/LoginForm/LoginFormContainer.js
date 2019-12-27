import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import LoginFormStyle from "components/LoginForm/LoginFormStyle";
import LoginFormWelcome from "components/LoginForm/LoginFormWelcome";
import LoginFormContent from "components/LoginForm/LoginFormContent";

import LoadingLinear from "components/Animation/LoadingLinear/LoadingLinear"
import SimpleToast from "components/Toast/SimpleToast"


class LoginFormContainer extends Component {

	render() {
		let { classes, loadAnimation, ...rest } = this.props;
		//the only way you get a token is from the database... so this means you are logged in...
		let { token } = rest.userInfo;
		// console.log(loadAnimation)
		// console.log(rest.userInfo)
	return (<div>
				{ loadAnimation ? <LoadingLinear /> : <span />}

				{ token.length >= 3  ?
					<LoginFormWelcome {...rest} /> :
					<LoginFormContent {...this.props} />
				}

				<SimpleToast {...this.props.toast} closeToast={this.props.closeToast} />
			</div>
	);
	}
}

export default withStyles(LoginFormStyle)(LoginFormContainer);
