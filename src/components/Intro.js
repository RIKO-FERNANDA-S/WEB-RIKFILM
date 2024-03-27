import { Button, Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
  return( 
  
        <div className='home align-items-center d-flex'>
        <Container className='text-white d-flex justify-content-center align-items-center'>
          <Row>
            <Col>
            <div className='title '>LIBAS SEMUA FILM</div>
            <div className='title'>TANPA BATAS</div>
            <div className='ButtonHome mt-4 text-center'>
                <Button variant='dark'>CHEK SEMUA LIST</Button>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
  );
};
export default Intro;