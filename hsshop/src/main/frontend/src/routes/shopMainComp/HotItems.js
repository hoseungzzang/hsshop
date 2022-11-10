import { Button, Container, Nav, Row, Col, Card,Carousel  } from 'react-bootstrap';
import '../../css/Shopmain.css';
function HotItems() {

    return (
      <div className='hotDiv'>
    
      <h1>가장 Hot한 상품들을 확인해보세요!</h1>
      <div className='groupDiv'>

      <div className='thingDiv'>
      <img
          className=""
          src={require('../../images/song.jpg')}
          alt="Second slide"
        />
        <div>
        <h2 className=''>Title</h2>
        <p >HS의 노래실력을 구매해보세요!</p>

        </div>
       
      </div>
       <div className='thingDiv'>dsadsa</div>
       <div className='thingDiv'>dsadsa</div>
       <div className='thingDiv'>dsadsa</div>

      </div>
  
       
      </div>
    );
  }

  export default HotItems

  