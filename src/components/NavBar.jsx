import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect, useState, useContext, useRef } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
// import endpoints from '../constants/endpoints';
import ThemeToggler from './ThemeToggler';
import '../css/navbar.css';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { Link } from 'react-scroll';
import navbarData from './JSON/navbar.json'; // Import the JSON data

const styles = {
  logoStyle: {
    width: 100,
    height: 400,
  },
};

const ExternalNavLink = styled.a`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
`;

const InternalNavLink = styled(NavLink)`
  color: ${(props) => props.theme.navbarTheme.linkColor};
  &:hover {
    color: ${(props) => props.theme.navbarTheme.linkHoverColor};
  }
  &::after {
    background-color: ${(props) => props.theme.accentColor};
  }
  &.navbar__link--active {
    color: ${(props) => props.theme.navbarTheme.linkActiveColor};
  }
`;

const NavBar = () => {
  const theme = useContext(ThemeContext);
  const [data, setData] = useState(navbarData);
  const [expanded, setExpanded] = useState(false);
  const navbarRef = useRef(null);

  useScrollPosition(({ currPos }) => {
    if (currPos.y < 0) {
      navbarRef.current.classList.add('scroll');
    } else {
      navbarRef.current.classList.remove('scroll');
    }
  });
  return (
    <div>
      <div>
        <Navbar
          fixed='top'
          // expand='md'
          bg=''
          variant='light'
          ref={navbarRef}
          // className='navbar-custom'
          // expanded={expanded}
          style={{
            position: 'right',
            right: '-1%',
            top: '-2%',
            paddingBottom: '-50%',
            color: 'white',
          }}
        >
          <a href='https://www.github.com/BennyDanielT'>
            <div
            // style={{ position: 'absolute', top: '-10%', left: '1%' }}
            >
              <img
                src={data?.logo?.source}
                // className='brand-logo'
                alt='main logo'
                style={
                  data?.logo?.height && data?.logo?.width
                    ? {
                        height: 100,
                        width: 125,
                        borderRadius: data?.logo?.borderRadius,
                      }
                    : styles.logoStyle
                }
              />
            </div>
          </a>
          <Container>
            {data?.logo && (
              <Navbar.Brand href='https://github.com/BennyDanielT'></Navbar.Brand>
            )}
            <Navbar.Toggle
              aria-controls='responsive-navbar-nav'
              onClick={() => setExpanded(!expanded)}
            />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='me-auto' />
              <Nav>
                {data &&
                  data.sections?.map((section, index) =>
                    section?.type === 'link' ? (
                      <ExternalNavLink
                        key={section.title}
                        href={section.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        onClick={() => setExpanded(false)}
                        className='navbar__link'
                        theme={theme}
                      >
                        {section.title}
                      </ExternalNavLink>
                    ) : (
                      <Link
                        key={section.title}
                        activeClass='active' // CSS class for the active link
                        to={section.sectionId}
                        spy={true} // Enable spy mode, highlights the section in the viewport
                        smooth={true} // Enable smooth scrolling
                        offset={-70} // Offset to account for the fixed Navbar height
                        duration={700} // Duration of the scroll animation
                        onClick={() => setExpanded(false)}
                        className='navbar__link'
                        theme={theme}
                      >
                        {section.title}
                      </Link>
                      // <InternalNavLink
                      //   key={section.title}
                      //   onClick={() => setExpanded(false)}
                      //   exact={index === 0}
                      //   activeClassName='navbar__link--active'
                      //   className='navbar__link'
                      //   to={section.href}
                      //   theme={theme}
                      // >
                      //   {section.title}
                      // </InternalNavLink>
                    ),
                  )}
              </Nav>
              {/* <ThemeToggler onClick={() => setExpanded(false)} /> */}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  );
};

const NavBarWithRouter = withRouter(NavBar);
export default NavBarWithRouter;
