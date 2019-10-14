import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import FormStyle from "components/Forms/FormStyle";
import LoginFormWelcome from "components/Forms/LoginFormWelcome";
import LoginFormContent from "components/Forms/LoginFormContent";
import LoginFormError from "components/Forms/LoginFormError";

/*
TO DO 
--- actually.... hide the survey part until someone is logged in?
*/
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
						<LoginFormError {...this.props} />
			</div>
    );
  }
}

export default withStyles(FormStyle)(LoginFormContainer);
