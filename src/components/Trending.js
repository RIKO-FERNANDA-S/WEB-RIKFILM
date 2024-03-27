import { Card, Col, Container, Image, Row } from "react-bootstrap";
import DuneImage from "../images/trending/dune.jpg";
import EverthingImage from "../images/trending/everything.jpg";
import InfiniteImage from "../images/trending/infinite.jpg";
import JokerImage from "../images/trending/joker.jpg";
import LightyearImage from "../images/trending/lightyear.jpg";
import MorbiusImage from "../images/trending/morbius.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br/>
        <h1 className="mt-4 text-white ">TRENDING MOVIES</h1>
        <br/>
        <Row>
          <Col md={4} className="MovieWrapper" id="tranding">
            <Card className=" MovieImage">
              <Image src={DuneImage} alt="dune" className="trandingImage"></Image>
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
              <Image src={EverthingImage} alt="dune" className="trandingImage"></Image>
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
              <Image src={InfiniteImage} alt="dune" className="trandingImage"></Image>
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
              <Image src={JokerImage} alt="dune" className="trandingImage"></Image>
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
              <Image src={LightyearImage} alt="dune" className="trandingImage"></Image>
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
              <Image src={MorbiusImage} alt="dune" className="trandingImage"></Image>
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
export default Trending;
