import { Navbar, Container, Nav, NavDropdown, } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import "./styles.scss"

const Menu = () => {
    return (

    <Navbar bg="light" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-nav">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/latestReleases">Latest Releases</NavLink>
            <NavLink className="nav-link" to="/betterMovies">Better Movies</NavLink>
            <NavLink className="nav-link" to="/populars">Popular Movies</NavLink>
            <NavLink className="nav-link" to="/buscador">Search</NavLink>
            <NavLink className="nav-link" to="/login">Login</NavLink>
            <NavLink className="nav-link" to="/logout">Logout</NavLink>
            <NavLink className="nav-link" to="/registro">Registro</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        

    );
  };
  
  export { Menu };