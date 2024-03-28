import { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import DuneImage from "../images/trending/dune.jpg";
// import EverthingImage from "../images/trending/everything.jpg";
// import InfiniteImage from "../images/trending/infinite.jpg";
// import JokerImage from "../images/trending/joker.jpg";
// import LightyearImage from "../images/trending/lightyear.jpg";
// import MorbiusImage from "../images/trending/morbius.jpg";
import axios from "axios"


const Trending = () => {

  const [movies, setMovies] = useState([])
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}`, {
      params: {
         api_key: process.env.REACT_APP_TMDB_KEY
      }
    }).then((res) => {
      // console.log("inihasilnya ", res.data.results)
      setMovies(res.data.results)
    }).catch(err => {
      console.log(err)
    })
  },[])




  return (
    <div>
      <Container>
        <br/>
        <h1 className="mt-4 text-white ">TRENDING MOVIES</h1>
        <br/>
        <Row>

          {movies.map((result, index) => {
  
            return(
               <Col md={4} className="MovieWrapper" id="tranding" key={index}>
            <Card className=" MovieImage">
              <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="tust" className="trandingImage"></Image>
              <div className="bg-dark">
                <diV className="p-2 m-1 text-white">
                  <Card.Title className=" text-center">{result.title}</Card.Title>
                  <Card.Text className="text-left">
                    {result.overview}.slice(50)
                  </Card.Text>
                  <Card.Text className="text-left">
                    {result.release_date}
                  </Card.Text>
                </diV>
              </div>
            </Card>
          </Col> 
            )
          })}

        </Row>
      </Container>
    </div>
  );
};
export default Trending;
