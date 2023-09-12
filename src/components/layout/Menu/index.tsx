import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles.scss";
import { useMe } from "../../../hooks";
import { BsFillCameraReelsFill } from "react-icons/bs";

const Menu = () => {
  const { logout, me } = useMe();

  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        {/* <Navbar.Brand href="#home">Home</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse  className="container-nav" id="basic-navbar-nav">
          <Nav className="ms-auto my-nav">
            {me ? (
              <>
                <NavLink className="my-icon" to="/">
                <BsFillCameraReelsFill />
                {/* Home */}
                </NavLink>
                <NavLink className="nav-link my-nav-link" to="/latestReleases">
                  Ultimo Lanzamiento
                </NavLink>
                <NavLink className="nav-link my-nav-link" to="/betterMovies">
                  Mejores Películas
                </NavLink>
                <NavLink className="nav-link my-nav-link" to="/populars">
                  Populares
                </NavLink>
                <NavLink className="nav-link my-nav-link" to="/buscador">
                  Buscador
                </NavLink>
                <Nav.Link className="nav-link my-nav-link" onClick={logout}>
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
