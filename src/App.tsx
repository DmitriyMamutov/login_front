import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import SignupPage from "./pages/SignUpPage";
import EmailSent from "./pages/EmailSent";
import ForgottenPassword from "./pages/ForgottenPassword";
import PasswordReset from "./pages/PasswordReset";

import Product from "./pages/ProductPage";
import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BacisRoute";
import { connect } from "react-redux";
import { ISession } from "./interfaces";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App(checked: ISession) {
  return (
    <div>
      <BrowserRouter>
        {checked && (
          <Switch>
            <BasicRoute path="/passwordreset/:userId/:resetString">
              <PasswordReset />
            </BasicRoute>

            <BasicRoute path="/forgottenpassword">
              <ForgottenPassword />
            </BasicRoute>

            <BasicRoute path="/emailsent/:userEmail?/:reset?">
              <EmailSent />
            </BasicRoute>

            <BasicRoute path="/signup">
              <SignupPage />
            </BasicRoute>

            <BasicRoute path="/login/:userEmail?">
              <LoginPage />
            </BasicRoute>

            <AuthRoute path="/products">
              <ProductsPage />
            </AuthRoute>

            <AuthRoute path="/product/:id">
              <Product />
            </AuthRoute>

            <Route path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        )}
      </BrowserRouter>
    </div>
  );
}

const mapStateToProps = ({ session }: { session: ISession }) => ({
  checked: session.checked,
});

export default connect(mapStateToProps)(App);
