import { useState } from "react";
import "./styles.css";

export default function App() {
  return <Header />;
}

function Header() {
  return (
    <body>
      <Navbar />
      <MainContent />
    </body>
  );
}

function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav); // Toggle the value of nav
  };
  return (
    <nav className="nav">
      <ul className="logo" onClick={handleClick}>
        LOGO
      </ul>

      {nav && (
        <ul className="nav-items">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      )}
    </nav>
  );
}

function MainContent() {
  return (
    <>
      <h1 className="message">Click on the Logo to toggle the navbar</h1>
      <p className="message">
        This project is designed for me to practice React State and event
        handles but making mobile navbar. This navbar is only desgined for the
        mobile view
      </p>
    </>
  );
}
