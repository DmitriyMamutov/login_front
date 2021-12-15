import { Link } from "react-router-dom";


const HomePage = () =>{
    return(
        <div>
        <p>Home</p>
        <Link to="/login">Login</Link>
        
        <Link to="/signup">SignUp</Link>
        </div>

    )
}

export default HomePage;