import React from 'react'

const Products = () => {
  return (
    
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
  )
}

export default Products