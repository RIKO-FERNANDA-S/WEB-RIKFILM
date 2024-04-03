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
  const account = 21;

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
      params: {
         api_key: process.env.REACT_APP_TMDB_KEY
      }
    }).then((res) => {
      console.log("inihasilnya ", res.data.results)
      setMovies(res.data.results)
    }).catch(err => {
      console.log(err)
    })
  },[])




  return (
    <div>
      <Container>
        <br/>
        <div className="tittle-movie ">
        <h1 className="mt-4 text-center py-5 ">Top Movie <span>2024</span></h1>
        </div>
        <br/>
        <Row>

          {movies.map((result, index) => {
  
            return(
               <Col md={4} className="MovieWrapper" id="tranding" key={index}>
            <Card className=" MovieImage bg-dark border border-5 border-white mb-3">
              <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="tust" className="trandingImage"></Image>
              <div className="">
                <diV className="textFilm p-2 m-1 text-white">
                  <Card.Title className="title-film text-center">{result.title}</Card.Title>
                  <div className=" d-flex justify-content-between mx-3 ">
                    <div className="rate d-flex gap-2">
                    <box-icon type='solid' name='star' color="gold"></box-icon>
                  <Card.Text className="text-left">
                    {result.vote_average}
                  </Card.Text>
                    </div>
                 
                  <Card.Text className="text-left">
                    {result.release_date}
                  </Card.Text>
                  </div>
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
