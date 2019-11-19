import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import LoginFormStyle from "components/LoginForm/LoginFormStyle";
import LoginFormWelcome from "components/LoginForm/LoginFormWelcome";
import LoginFormContent from "components/LoginForm/LoginFormContent";


class LoginFormContainer extends Component {
	
  render() {
		let { userInfo } = this.props;
		//the only way you get a token is from the database... so this means you are logged in...
		let { token } = userInfo;

    return (<div>
						{ token.length >= 3  ?
							<LoginFormWelcome {...this.props} /> :
							<LoginFormContent {...this.props} />
						}
			</div>
    );
  }
}

export default withStyles(LoginFormStyle)(LoginFormContainer);
