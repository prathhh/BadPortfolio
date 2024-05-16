import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import transition from "../transition";
import videoBg from "../assets/neon.mp4";
import "../css/videoBg.css";

const Tpage = () => {
  return (
    <div className="main">
      <div className="overlay"></div>
      <video src={videoBg} autoPlay loop muted></video>
      <div className="content">
        <p>pratham</p>
        <p className="hd">junior front end developer</p>
        <Link to="/about" className="homeBtn">
          about me!
        </Link>
      </div>
    </div>
  );
};

export default transition(Tpage);
