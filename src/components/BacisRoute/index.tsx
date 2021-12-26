import { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { KEY_ITEMS } from "../../config/product_config";
import { ISessionAuth } from "../../interfaces";

type Props = {
  authenticated?: boolean;
  children: JSX.Element;
  path: string;
};

const BasicRoute: FC<Props> = ({ children, authenticated, ...rest }) => {
  const { productsLink } = KEY_ITEMS;

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !authenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: productsLink,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = (session: ISessionAuth) => ({
  authenticated: session.authenticated,
});

export default connect(mapStateToProps)(BasicRoute);
