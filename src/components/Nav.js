import logo from '../images/Planapp.png';
import { useNavigate } from "react-router-dom";

const Nav = () => {
    const navigate = useNavigate();

    return (
      <nav>
        <div className="logo-container">
          <a href='/'>
            <img src={logo} alt="logo" />
          </a>
        </div>
        <div className="controls-container">
          <div className="icon" onClick={() => navigate("/ticket")}>
            +
          </div>
          <div className="icon" onClick={() => navigate("/")}>
            &lt;&lt;
          </div>
        </div>
      </nav>
    );
};

export default Nav;
