import React from "react";
import PropTypes from "prop-types";
import { Route, Switch, Redirect } from "react-router-dom";
import { uid } from "react-uid";
import routes, { searchPathBlacklist, navItems } from "./routes";

const Routes = ({ search }) => {
  return (
    <Switch>
      {routes.filter(route => !route.external).map((route) => {
        const Component = route.component;
        return (
          <Route
            key={uid(route)}
            exact
            path={route.path}
            render={(props) => <Component {...props} search={search} />}
          />
        );
      })}
      <Route path="/" component={() => <Redirect to="/news" />} />
    </Switch>
  );
};

Routes.propTypes = {
  search: PropTypes.string,
};

export default Routes;
export { routes, searchPathBlacklist, navItems };
