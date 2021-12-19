import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import ProductsPage from "./pages/ProductsPage";
import SignupPage from "./pages/SignUpPage";
import Product from "./pages/ProductPage";
import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BacisRoute";
import { connect } from "react-redux";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App({ checked }) {
  return (
    <div className="container">
      <Router>
        {checked && (
          <Switch>
            <BasicRoute path="/signup">
              <SignupPage />
            </BasicRoute>

            <BasicRoute path="/login">
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
      </Router>
    </div>
  );
}
const mapStateToProps = ({ session }) => ({
  checked: session.checked,
});

export default connect(mapStateToProps)(App);
