import React from 'react';
import { Row, Col } from 'react-router-dom'

const solution = () => {
  return (
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
  )
}

export default solution