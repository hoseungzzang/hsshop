import { Button, Container, Nav, Row, Col, Card, Carousel } from 'react-bootstrap';
import ReactTooltip from 'react-tooltip';
import logo from '../assets/logo.svg'
import CreateImg from '../CreateImg.js';
function Footer() {

    return (
        <div className='fMain'>
            <div className='fGroup'>
                <div className='fTitle'>
                    <img
                        alt=""
                        src={logo}
                        width="20"
                        height="20"
                        className="d-inline-block align-top App-logo"
                    />HS's Shop
                </div>
                <div className='fDivGroup'>
                    <div className='fStack'>
                        <CreateImg id="skills"></CreateImg>
                        <h3>STACK</h3></div>
                    <div className='dlStack'>
                        <dl>
                            <dt><h2>FE : </h2></dt>
                            <dd><CreateImg id="stack/react"></CreateImg></dd>
                            <dd><CreateImg id="stack/html"></CreateImg> </dd>
                            <dd><CreateImg id="stack/css"></CreateImg> </dd>
                            <dd><CreateImg id="stack/js"></CreateImg> </dd>
                        </dl>
                        <dl>
                            <dt><h2>BE : </h2></dt>
                            <dd><CreateImg id="stack/java"></CreateImg></dd>
                            <dd><CreateImg id="stack/Spring boot"></CreateImg></dd>
                            <dd><CreateImg id="stack/JPA"></CreateImg></dd>
                            <dd><CreateImg id="stack/My SQL"></CreateImg></dd>
                        </dl>
                    </div>

                </div>

                <div className='dlInfo'>
                    <a data-for="numTt" data-tip>
                        <CreateImg id="num" ></CreateImg>
                    </a>
                    <ReactTooltip
                        id="numTt"
                        event="click"
                        effect='solid'
                        getContent={dataTip => "010-8076-1993"} />

                    <div className='bar'></div>
                    <a data-for="kakaoTt" data-tip>
                        <CreateImg id="kakao"></CreateImg>
                    </a>
                    <ReactTooltip
                        id="kakaoTt"
                        event="click"
                        effect='solid'
                        
                        getContent={dataTip => "dsjoo99"} />
                      <div className='bar'></div>
                    <a data-for="emailTt" data-tip>
                        <CreateImg id="email"></CreateImg>
                    </a>
                    <ReactTooltip
                        id="emailTt"
                        event="click"
                        effect='solid'
                        getContent={dataTip => "wnghtmd99@naver.com"} />





                </div>
            </div>
        </div>
    );
}

export default Footer

