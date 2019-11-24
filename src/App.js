import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CssBaseline from "@material-ui/core/CssBaseline";
import indexRoutes from "routes/indexRoutes";

import Header from "components/Header/Header";


class App extends Component {
  componentDidMount() {
    // console.log("baseline mounted")
		console.log(process.env.REACT_APP_API_URL)
  }

  render() {
    // let hist = createBrowserHistory();
    // console.log(this.props);
    return (
      <div>
        {/* inside app, w router */}
        <CssBaseline />
        <Header />
				<BrowserRouter >
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

export default App;
