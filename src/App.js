import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import SignupPage from "./pages/SignupPage";

import AuthRoute from "./components/AuthRoute";
import BasicRoute from "./components/BacisRoute";
import { connect } from "react-redux";

function App({ checked }) {
  return (
    <div className="container">
    <Router>
      {checked && (
        <Switch>
          <BasicRoute path="/signup">
            <SignupPage/>
          </BasicRoute>

          <BasicRoute path="/login">
            <LoginPage />
          </BasicRoute>

          <AuthRoute path="/dashboard">
            <DashboardPage />
          </AuthRoute>

          <Route path="/">
            <HomePage />
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
