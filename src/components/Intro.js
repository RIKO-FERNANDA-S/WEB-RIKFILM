import { Button, Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
  return( 
  
        <div className='home align-items-center d-flex flex-column'>
        <Container className='text-white d-flex justify-content-start align-items-center'>
          <Row>
            <Col className='colHome'>
            <div className='title1 '>Rik<span>Film</span></div>
            <div className='title2'>
              <p>
              Nonton movie bersama teman dan keluarga, dengan sukaria
              </p>
            </div>
            <div className='ButtonHome mt-4 text-start'>
                <Button variant='dark'>CHEK SEMUA LIST</Button>
            </div>
            </Col>
          </Row>
        </Container>
            <div className='gradasi'></div>
      </div>
  );
};
export default Intro;