import { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ISessionAuth } from "../../interfaces";

type Props = {
  children?: JSX.Element;
  authenticated?: boolean;
  path: string;
};

const AuthRoute: FC<Props> = ({ children, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = ({ session }: { session: ISessionAuth }) => ({
  authenticated: session.authenticated,
});

export default connect(mapStateToProps)(AuthRoute);
