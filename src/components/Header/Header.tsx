import React from 'react';
import { Nav, NavbarBrand } from 'react-bootstrap';
import './Header.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <Nav className='nav d-flex justify-content-between py-3'>
      <Nav.Item className='brand-con'>
        <NavbarBrand>
          <Link to='/'> <img src="/flexisaf-imagery/Chrome-Images/606c20478671192ef5a51ff0_fs-logo.svg" alt="logo" /></Link>
        </NavbarBrand>
      </Nav.Item>

      <Nav.Item >

        <div className='nav-ul nav-item text-black'>
          <span className="list-item"><Link to='/#company' className='nav-link text-black'>Company</Link></span>
          <span className="list-item"><Link to='/product' className='nav-link'>Product</Link></span>
          <span className="list-item" ><Link to='/career' className='nav-link'>Career</Link></span>
          <span className="list-item"><Link to='/blog' className='nav-link'>Blog</Link></span>
      

          <Button name='Contact Us' handleClick={() => console.log("contact us button clicked")}/>
        </div>
      </Nav.Item>

      {/* <Nav.Item className='nav-button btn btn-link'>
        <button className='d-none'>m</button>
      </Nav.Item> */}
    </Nav>
  )
}


export default Header