import { Navbar,Container, Nav } from "react-bootstrap"

const NavigationBar = () => {
    return (
        <div>
        <Navbar variant="dark">
            <Container>
            <Navbar.Brand href="/">RikFilm</Navbar.Brand>
            <Nav>
                <Nav.Link href="#tranding">TRENDING</Nav.Link>
                <Nav.Link href="#superhero">SUPERHERO</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        </div>
    )
}

export default NavigationBar 