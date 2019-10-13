import React, { useState, useLayoutEffect } from 'react';
import { Button, Transition } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import './Header.css';

function useWindowSize() {
  let [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const path = window.location.pathname;
  let [width, height] = useWindowSize();
  const isMobile = width <= 600;

  function renderHeader() {
    if (!isMobile) {
      return (
        <div className="nav-header">
          <Transition transitionOnMount duration={2000}>
            <Link to="/" className="nav-header-item">
              Home
            </Link>
          </Transition>
          <div className="nav-links">
            <Transition transitionOnMount duration={2000}>
              <Link
                to="/projects"
                className={
                  'nav-header-item' + (path === '/projects' ? ' selected' : '')
                }
              >
                Projects
              </Link>
            </Transition>
            <Transition transitionOnMount duration={2000}>
              <Link
                to="/travels"
                className={
                  'nav-header-item' +
                  (path.startsWith('/travels') ? ' selected' : '')
                }
              >
                Travels
              </Link>
            </Transition>
            <Transition transitionOnMount duration={2000}>
              <Link
                to="/about"
                className={
                  'nav-header-item' + (path === '/about' ? ' selected' : '')
                }
              >
                About
              </Link>
            </Transition>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className="mobile-nav">
            <Button
              icon="bars"
              className="mobile-button"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
          {isOpen && (
            <Transition transitionOnMount duration={2000} animation="fade down">
              <div>
                <div className="mobile-menu">
                  <Button className="menu-button">
                    <Link className="menu-button-a" to="/">
                      Home
                    </Link>
                  </Button>
                  <Button className="menu-button">
                    <Link className="menu-button-a" to="/projects">
                      Projects
                    </Link>
                  </Button>
                  <Button className="menu-button">
                    <Link className="menu-button-a" to="/travels">
                      Travels
                    </Link>
                  </Button>
                  <Button className="menu-button">
                    <Link className="menu-button-a" to="/about">
                      About
                    </Link>
                  </Button>
                </div>
              </div>
            </Transition>
          )}
        </div>
      );
    }
  }

  return renderHeader();
}
