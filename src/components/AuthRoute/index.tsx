import { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { SIGNUP_COMPONENT_CONFIG } from "../../config/signup_config";

type Props = {
  children?: null;
  authenticated?: boolean;
};

const AuthRoute: FC<Props> = ({ children, authenticated, ...rest }) => {
  const { loginLink } = SIGNUP_COMPONENT_CONFIG;
  return (
    <Route
      {...rest}
      render={({ location }: { location: string }) =>
        authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: loginLink,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = ({ session }: { session: any }) => ({
  authenticated: session.authenticated,
});

export default connect(mapStateToProps)(AuthRoute);
