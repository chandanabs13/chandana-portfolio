import { Link } from "react-router-dom";
import "./index.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <ul className="header__container--list1 mb-0">
          <Link to="/">
            <li>CHANDANA</li>
          </Link>
        </ul>
        <ul className="header__container--list2 mb-0">
          <Link to="/home">
            <li>Home </li>
          </Link>
          <li>About </li>
          <li>Contact </li>
          <li>Work </li>
          <li>Projects </li>
        </ul>
        <ul className="header__container--list3 mb-0">
          <li>
            <a href="/chandana_resume_updated.pdf" download="Chandana-Resume.pdf">
              Download CV
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
