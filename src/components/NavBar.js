import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img//icons8-sun-64.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';




export const NavBar = () => {
    const[activeLink, setActiveLink] = useState('home');
    const[scrolled, seScrolled] = useState(false);
    const handleNavIcon1Click = () => {
    window.open('https://www.linkedin.com/in/rinasdervishi/', '_blank');
    };

    useEffect(() => {
      const onScroll =() => {
        if (window.scrollY > 50) {
          seScrolled(true);
        } else {
          seScrolled(false);
        }
      }
    
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
    }, [])

 const onUpdateActiveLink = (value) => {
  setActiveLink(value);
 }
    
  return (
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
          <Container>
            <Navbar.Brand href="#home">
                <img src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle> 
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                <Nav.Link href="#connect" className={activeLink === 'connect' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('connect')}>Contact</Nav.Link>
              </Nav>
              <span className="navbar-text">
                <div className="social-icon">
                    <a href="#" onClick={handleNavIcon1Click}><img src={navIcon1} alt=""/></a>
                </div>
                <button className="vvd" onClick={()=> console.log('connect')}><span>Let's Connect</span></button>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

    