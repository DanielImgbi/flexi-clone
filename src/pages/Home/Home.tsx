import './Home.css'
import { Row, Col } from 'react-bootstrap';
import Button from '../../components/Button/Button';
import Products from '../../components/secondary/Products';
<<<<<<< HEAD
import Solution from '../../components/secondary/Solution';
=======
import Solution from '../../components/secondary/solution';
>>>>>>> 481e93643250958e8f348de3005321d6d305ba55

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
      
        <Products />
        <Solution />

       
      </>

  )
}

export default Home