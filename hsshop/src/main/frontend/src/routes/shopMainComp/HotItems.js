import { Button, Container, Nav, Row, Col, Card,Carousel  } from 'react-bootstrap';
import '../../css/Shopmain.css';
function HotItems() {

    return (
      <div className='HotItemsDiv'>
    
      <h1 >가장 Hot한 상품들을 확인해보세요!</h1>
      <div className='itemGroupDiv'>

      <div className='itemDiv'>
      <img
          className=""
          src={require('../../images/song.jpg')}
          alt="Second slide"
        />
        <div>
        <h3 className=''>Title</h3>
        <p >HS의 노래실력을 구매해보세요!</p>

        </div>
       
      </div>
      
      <div className='itemDiv'>
      <img
          className=""
          src={require('../../images/song.jpg')}
          alt="Second slide"
        />
        <div>
        <h3 className=''>Title</h3>
        <p >HS의 노래실력을 구매해보세요!</p>

        </div>
       
      </div>
      <div className='itemDiv'>
      <img
          className=""
          src={require('../../images/song.jpg')}
          alt="Second slide"
        />
        <div>
        <h3 className=''>Title</h3>
        <p >HS의 노래실력을 구매해보세요!</p>

        </div>
       
      </div>
      <div className='itemDiv'>
      <img
          className=""
          src={require('../../images/song.jpg')}
          alt="Second slide"
        />
        <div>
        <h3 className=''>Title</h3>
        <p >HS의 노래실력을 구매해보세요!</p>

        </div>
       
      </div>
      <div className='itemDiv'>
      <img
          className=""
          src={require('../../images/song.jpg')}
          alt="Second slide"
        />
        <div>
        <h3 className=''>Title</h3>
        <p >HS의 노래실력을 구매해보세요!</p>

        </div>
       
      </div>
       <div className='itemDiv'>dsadsa</div>
       <div className='itemDiv'>dsadsa</div>

      </div>
  
       
      </div>
    );
  }

  export default HotItems

  