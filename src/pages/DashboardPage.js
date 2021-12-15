import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { logoutUser } from "./../auth/actions/userActions";
import { useHistory } from "react-router-dom";

const DashboardPage = ({ logoutUser }) => {
  const history = useHistory();

  return (
    <div className="page-wrapper">

      <h1>Dashboard</h1>

      <button onClick={() => logoutUser(history)}>Logout</button>
    </div>
  );
};

export default connect(null, { logoutUser })(DashboardPage);
