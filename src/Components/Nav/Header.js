import "../../Styles/Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../Assets/Logo.svg";
import { useState, useEffect } from "react";
import Resume from "../../Assets/Parmanand-Resume.pdf";
function Header() {
  const [showNavbar, setShowNavbar] = useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 832) {
        setShowNavbar(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      <div className="NavBar">
        <Link to="/" className="LogoBox">
          <img src={Logo} alt="Logo" className="Logo" />
        </Link>
        <div className="Nav">
          <div className="Nav_Points">
            <ol className="Nav_List">
              <li className="Nav_Content">
                <Link to="/about">About</Link>
              </li>
              <li className="Nav_Content">
                <Link to="/experience">Experience </Link>
              </li>
              <li className="Nav_Content">
                <Link to="/projects">Projects </Link>
              </li>
              <li className="Nav_Content">
                <Link to="/contact">Contact</Link>
              </li>
            </ol>
          </div>
          <div>
            <div className="Resume">
              <a href={Resume} download="Parmanand-Resume.pdf">
                RESUME
              </a>
            </div>
          </div>
        </div>
        <div
          className={`NavLines ${showNavbar ? "open" : ""}`}
          onClick={handleShowNavbar}
        >
          <div className="NavBox">
            <div className="NavPanelBox" />
          </div>
        </div>
      </div>
      <div className={`RightPanel ${showNavbar ? "open" : ""}`}>
        <ol className="Nav_List">
          <li className="Nav_Content"><Link to="/about">About</Link></li>
          <li className="Nav_Content"><Link to="/experience">Experience </Link></li>
          <li className="Nav_Content"><Link to="/projects">Projects </Link></li>
          <li className="Nav_Content"><Link to="/contact">Contact</Link></li>
        </ol>
        <div className="resumeBox">
          <div className="Resume"><a href={Resume} download="Parmanand-Resume.pdf">
                RESUME
              </a></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
