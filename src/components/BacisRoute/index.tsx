import { FC } from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { KEY_ITEMS } from "../../config/product_config";

type Props = {
  authenticated?: boolean;
};

const BasicRoute: FC<Props> = ({ children, authenticated, ...rest }) => {
  const { productsLink } = KEY_ITEMS;

  return (
    <Route
      {...rest}
      render={({ location }: { location: string }) =>
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

const mapStateToProps = ({ session }: { session: any }) => ({
  authenticated: session.authenticated,
});

export default connect(mapStateToProps)(BasicRoute);
