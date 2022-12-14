import { Button, Container, Nav, Row, Col, Card,Carousel  } from 'react-bootstrap';
import '../css/Shopmain.css';
import HotestThing from './shopMainComp/HotestThing.js';
import HotItems from './shopMainComp/HotItems.js';
function Shopmain() {

    return (
      <div className=''>
      <Carousel>
      <Carousel.Item>
        <img
          className=""
          src={require('../images/sizing/bg1.jpg')}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={require('../images/sizing/cat.jpg')}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=""
          src={require('../images/sizing/test.jpg')}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
       <HotestThing/>      
       <HotItems/>   
       </div>
    );
  }

  export default Shopmain

  