import { memo, VFC } from "react";
import { Route, Switch } from "react-router-dom";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { HomeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <switch>
            {HomeRoutes.map(({ path, exact, children }) => (
              <Route key={path} exact={exact} path={url + path}>
                {children}
              </Route>
            ))}
          </switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
});
