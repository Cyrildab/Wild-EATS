import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./NavBar.scss";

function NavBar() {
  return (
    <nav className="navBar">
      <img src={logo} alt="Logo du site WILD EATS" className="logo" />
      <Link className="addRestaurant" to="/addRestaurant">
        Ajouter un restaurant
      </Link>
    </nav>
  );
}

export default NavBar;
