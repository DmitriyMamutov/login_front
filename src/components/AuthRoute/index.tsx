import { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

type Props = {
  children?: JSX.Element;
  authenticated?: boolean;
  path: string;
};

interface ISession {
  authenticated: boolean;
}

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

const mapStateToProps = ({ session }: { session: ISession }) => ({
  authenticated: session.authenticated,
});

export default connect(mapStateToProps)(AuthRoute);
