import { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { ISessionAuth } from "../../interfaces";

type Props = {
  authenticated?: boolean;
  children: JSX.Element;
  path: string;
};

const BasicRoute: FC<Props> = ({ children, authenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        !authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/products",
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

export default connect(mapStateToProps)(BasicRoute);
