import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div>
      <a href="https://github.com/settings/profile" target="_blank">
        <FaGithub className="icon me-2" />
      </a>
      {/* <a href="https://www.linkedin.com/in/chandana-trilok-236ab7209/" target="_blank">
        <FaLinkedin className="icon mx-2" />
      </a> */}
      {/* <FaInstagram /> */}
      <a href="https://mail.google.com/mail/?view=cm&fs=1&to=chandanasuresh.1310@gmail.com" target="_blank" rel="noreferrer">
        <MdEmail className="icon mx-2" />
      </a>
    </div>
  );
};

export default Logo;
