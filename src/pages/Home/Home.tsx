import './Home.css'
import { Row, Col } from 'react-bootstrap';
import Button from '../../components/Button/Button';

const Home = () => {
  return (
      <>
      
        <div className='Landing bg-warning'>

          <div className="container">

            <Row xs={1} md={2} xl={2} className='first-row mb-4'>
                <Col>
                    <h1>Improving Education Through Technology Solution</h1>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem fuga aperiam numquam repellendus, quo quasi iure nisi  praesentium voluptate itaque quia, iste corrupti odit 
                    </p>

                    <Button name='Learn More' handleClick={() => console.log("learn more button clicked")}/>
                </Col>
                <Col>                  <div className="img-con w-100 d-flex  justify-content-xs-center justify-content-xl-end">
                    <img src="/flexisaf-imagery/Actual-Images/FS-hero2x.png" alt="" className='' />
                  </div>
                </Col>
            </Row>
          </div>
        </div>

        <div className="product my-3 py-5 h-75 ">
          <div className="container">
          <Row xs={1} md={2} xl={2} className='py-4'>
                <Col>
                    <img src="/flexisaf-imagery/Actual-Images/hero-banner-image (1).png" alt="" style={{height:'100%', width:'100%'}}/>
                </Col>
                <Col>
                    <h1>
                      Our Products Are Designed to Simplify School Activities
                    </h1>

                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                      Neque, minima vitae inventore quo eveniet officia, tempora doloribus, 
                      in sequi ducimus assumenda porro architecto esse!
                    </p>

                    <Row xs={1} md={2} xl={2}>
                      <Col className='my-3'>
                        <div className="badge bg-primary h-100 w-75">
                          <img src="/flexisaf-imagery/Chrome-Images/fs-logo (1).svg" alt="" style={{height:'100%', width:'100%'}}/>
                        </div>
                      </Col>

                      <Col className='my-3'>
                        <div className="badge bg-primary h-100 w-75">
                          <img src="/flexisaf-imagery/Chrome-Images/srms.svg" alt="" style={{height:'100%', width:'100%'}} />
                        </div>
                      </Col>
                    </Row>

                    <Row xs={1} md={2} xl={2} className=''>
                      <Col className='my-3'>
                        <div className="badge bg-primary h-100 w-75">
                          <img src="/flexisaf-imagery/Chrome-Images/safspply.svg" alt="" style={{height:'100%', width:'100%'}}/>
                        </div>
                      </Col>

                      <Col className='my-3'>

                        <div className="badge bg-primary h-100 w-75">
                          <img src="/flexisaf-imagery/Chrome-Images/fs-logo (1).svg" alt="" style={{height:'100%', width:'100%'}} />
                        </div>
                      </Col>

                    </Row>
                </Col>
              </Row>
          </div>
        </div>

        <div className="solution-to-stakeholders bg-warning">
          <div className="container text-center">
            <h1 className="text-h1">
              There is a Solution for <br/>All Stakeholders
            </h1>

            <p>FlexiSAF Solution are madefor all stakeholders

              <br />of Education in Nigeria
            </p>
            
            <div>
              <Row xs={1} md={2} xl={3}>

                <Col style={{background: 'red', height:'300px'}}>
                 <div className="card h-100 py-4">
                    <img src="/flexisaf-imagery/Chrome-Images/school-admins.svg" alt="image" className='card-img h-25' />
                    <div className="h3 bold mt-2">
                      School Administrators
                    </div>
                    <p className="card-body text-5">
                     Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima vero ad, tempore at sunt, facere ducimus maxime veniam odit recusandae in.
                    </p>
                 </div>
                </Col>

                <Col style={{background: 'red', height:'300px'}}>
                  <div className="card h-100 py-4">
                      <img src="/flexisaf-imagery/Chrome-Images/govt.svg" alt="image" className='card-img h-25' />
                      <div className="h3 bold mt-2">
                        Government Agencies
                      </div>
                      <div className="card-body">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima vero ad, tempore at sunt, facere ducimus maxime veniam odit recusandae in.
                      </div>
                  </div>
                </Col>

                <Col style={{background: 'red', height:'300px'}}>
                  <div className="card h-100 py-4">
                      <img src="/flexisaf-imagery/Chrome-Images/educational-bodies.svg" alt="image" className='card-img h-25' />
                        <div className="h3 bold mt-2">
                          Educational Bodies
                        </div>
                      <div className="card-body">

                       Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima vero ad, tempore at sunt, facere ducimus maxime veniam odit recusandae in.
                      </div>
                  </div>
                </Col>

              </Row>
            </div>
          </div>
        </div>
      </>

  )
}

export default Home