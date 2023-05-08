import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import { useMe } from "../../../hooks";

const Menu = () => {
  const { logout, me } = useMe();

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto my-nav">
            {me ? (
              <>
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
                <NavLink className="nav-link" to="/latestReleases">
                  Ultimo Lanzamiento
                </NavLink>
                <NavLink className="nav-link" to="/betterMovies">
                  Mejores Películas
                </NavLink>
                <NavLink className="nav-link" to="/populars">
                  Populares
                </NavLink>
                <NavLink className="nav-link" to="/buscador">
                  Buscador
                </NavLink>
                <Nav.Link className="nav-link" onClick={logout}>
                  Cerrar sesión
                </Nav.Link>
              </>
            ) : (
              <>
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="nav-link" to="/registro">
                  Registro
                </NavLink>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export { Menu };
