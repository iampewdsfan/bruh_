import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./styles.css";

export default function Navbar() {
  const path = window.location.pathname;
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        PENNY$PIGLET
      </a>
      <ul>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}
