// Imports
import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  // Component Logic / Scripts

  return (
    // Component Template (rendering)
    <footer>
      <div>
        <a href="https://github.com/prathhh" target="_blank" rel="noreferrer">
          <AiFillGithub />
        </a>
      </div>
      <p className="smallText">created by pratham</p>
    </footer>
  );
}

// CSS-in-JS / Prop-Types

// Exports
export default Footer;
