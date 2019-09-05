import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import indexRoutes from "./routes/indexRoutes";

import { connect } from "react-redux";
import * as actions from "./actions";

class App extends Component {
  componentDidMount() {
    // console.log("baseline mounted")
    //fetchUser will get name, info, if exists
    console.log(this.props.fetchRandomId());
  }

  render() {
    // let hist = createBrowserHistory();
    console.log(this.props);
    return (
      <div>
        {/* inside app, w router */}
        <CssBaseline />
        <BrowserRouter>
          {/* <Router history={hist}> */}
          <Switch>
            {indexRoutes.map((elem, key) => {
              if (elem.path) {
                return (
                  <Route
                    path={elem.path}
                    key={key}
                    exact={elem.exact}
                    component={elem.component}
                    {...this.elem}
                  />
                );
              } else {
                return <Route key={key} component={elem.component} />;
              }
            })}
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user,
    randomId: state.randomId
  };
}

export default connect(
  mapStateToProps,
  actions
)(App);
