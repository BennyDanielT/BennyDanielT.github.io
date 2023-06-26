import { Navbar, Nav, Container } from 'react-bootstrap';
import React, { useEffect, useState, useContext } from 'react';
import { withRouter } from 'react-router';
import { NavLink } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';
import endpoints from '../constants/endpoints';
import ThemeToggler from './ThemeToggler';
import '../css/navbar.css';

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
  const [data, setData] = useState(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    fetch(endpoints.navbar, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);

  return (
    <div>
      <a href='https://www.github.com/BennyDanielT'>
        <div style={{ position: 'absolute', top: '-1%', left: '1%' }}>
          <img
            src={data?.logo?.source}
            // className='brand-logo'
            alt='main logo'
            style={
              data?.logo?.height && data?.logo?.width
                ? {
                    height: 120,
                    width: 150,
                    borderRadius: data?.logo?.borderRadius,
                  }
                : styles.logoStyle
            }
          />
        </div>
      </a>

      <Navbar
        fixed='top'
        // expand='md'
        bg=''
        variant='light'
        // className='navbar-custom'
        // expanded={expanded}
        style={{ position: 'right', right: '-1%', top: '2%', color: 'white' }}
      >
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
                    <InternalNavLink
                      key={section.title}
                      onClick={() => setExpanded(false)}
                      exact={index === 0}
                      activeClassName='navbar__link--active'
                      className='navbar__link'
                      to={section.href}
                      theme={theme}
                    >
                      {section.title}
                    </InternalNavLink>
                  ),
                )}
            </Nav>
            {/* <ThemeToggler onClick={() => setExpanded(false)} /> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const NavBarWithRouter = withRouter(NavBar);
export default NavBarWithRouter;
