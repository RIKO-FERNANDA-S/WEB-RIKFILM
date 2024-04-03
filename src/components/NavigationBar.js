import { Navbar, Container, Nav, Dropdown, NavDropdown } from "react-bootstrap";
import 'boxicons'

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Nav className=" align-items-end  d-flex ms-auto gap-5 my-4">
              <NavDropdown title="Genre" id="navbarScrollingDropdown" className="fs-4 genre">
                <NavDropdown.Item href="#action3">Anime</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Horor</NavDropdown.Item>
                <NavDropdown.Item href="#action5">Romance</NavDropdown.Item>
              </NavDropdown>
              <div className="icons ms-4">
                    <box-icon name='search' color="white" size="md" ></box-icon>
              </div>
            
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
