import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import closeIcon from "../assets/shared/icon-close.svg";
import hamburgerIcon from "../assets/shared/icon-hamburger.svg";
import logo from "../assets/shared/logo.svg";
import "../styles/navbar.scss";

export default function Navbar() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [openMenu, setIsOpenMenu] = useState(false);
  const header = useRef();

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener("resize", handleWindowResize);
    document.addEventListener("mousedown", handleClickOutside, true);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }

  function handleMenuToggle() {
    setIsOpenMenu(!openMenu);
  }

  function handleClickOutside(e) {
    if (header.current && !header.current.contains(e.target)) {
      setIsOpenMenu(false);
    }
  }

  return (
    <>
      <header className='header' ref={header}>
        <a href='/'>
          <img src={logo} alt='company logo' />
        </a>
        <nav
          className={`nav ${openMenu ? "active" : ""} ${
            windowSize.innerWidth > 640 ? "desktop" : "mobile"
          }`}
        >
          <ul className='nav__list'>
            <li className='nav__list_item'>
              <span className='counter'>00</span>
              <NavLink
                to='/'
                end
                className={({ isActive }) =>
                  isActive ? "link currentlyActive" : "link"
                }
                onClick={handleMenuToggle}
              >
                Home
              </NavLink>
            </li>
            <li className='nav__list_item'>
              <span className='counter'>01</span>
              <NavLink
                to='/destination'
                className={({ isActive }) =>
                  isActive ? "link currentlyActive" : "link"
                }
                onClick={handleMenuToggle}
              >
                Destination
              </NavLink>
            </li>
            <li className='nav__list_item'>
              <span className='counter'>02</span>
              <NavLink
                to='/crew'
                className={({ isActive }) =>
                  isActive ? "link currentlyActive" : "link"
                }
                onClick={handleMenuToggle}
              >
                Crew
              </NavLink>
            </li>
            <li className='nav__list_item'>
              <span className='counter'>03</span>
              <NavLink
                to='/technology'
                className={({ isActive }) =>
                  isActive ? "link currentlyActive" : "link"
                }
                onClick={handleMenuToggle}
              >
                Technology
              </NavLink>
            </li>
          </ul>
        </nav>
        {windowSize.innerWidth < 640 && (
          <button className='menu-toggler' onClick={handleMenuToggle}>
            <img
              src={openMenu ? closeIcon : hamburgerIcon}
              alt='icon toggler menu'
            />
          </button>
        )}
      </header>
    </>
  );
}
