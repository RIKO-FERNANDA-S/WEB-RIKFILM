import { Card, Col, Container, Image, Row } from "react-bootstrap";
import antmanImage from "../images/superhero/antman.jpg";
import avengerImage from "../images/superhero/avenger.jpg";
import batmanImage from "../images/superhero/batman.jpg";
import robinhoodImage from "../images/superhero/robinhood.jpg";
import spidermanImage from "../images/superhero/spiderman-cover.jpg";
import supermanImage from "../images/superhero/superman.jpg";

const SuperHero = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="mt-4 text-white ">SUPER HERO MOVIES</h1>
        <br/>
        <Row>
          <Col md={4} className="MovieWrapper" id="superhero">
            <Card className=" MovieImage">
              <Image src={antmanImage} alt="antman image" className="trandingImage"></Image>
              <div className="bg-dark">
                <diV className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </diV>
              </div>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className=" MovieImage">
              <Image src={avengerImage} alt="avenger image" className="trandingImage"></Image>
              <div className="bg-dark">
                <diV className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </diV>
              </div>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={batmanImage} alt="batman image" className="trandingImage"></Image>
              <div className="bg-dark ">
                <diV className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </diV>
              </div>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={robinhoodImage} alt="robin hood image" className="trandingImage"></Image>
              <div className="bg-dark ">
                <diV className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </diV>
              </div>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={spidermanImage} alt="spiderman image" className="trandingImage"></Image>
              <div className="bg-dark ">
                <diV className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </diV>
              </div>
            </Card>
          </Col>
          <Col md={4} className="MovieWrapper">
            <Card className="MovieImage">
              <Image src={supermanImage} alt="superman image" className="trandingImage"></Image>
              <div className="bg-dark ">
                <diV className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">Card title</Card.Title>
                  <Card.Text className="text-left">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content.
                  </Card.Text>
                  <Card.Text className="text-left">
                    Last updated 3 mins ago
                  </Card.Text>
                </diV>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default SuperHero;
