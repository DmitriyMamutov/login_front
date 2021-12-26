import { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

type Props = {
  authenticated?: boolean;
  children: JSX.Element;
  path: string;
};

interface ISession {
  authenticated: boolean;
}

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

const mapStateToProps = ({ session }: { session: ISession }) => ({
  authenticated: session.authenticated,
});

export default connect(mapStateToProps)(BasicRoute);
