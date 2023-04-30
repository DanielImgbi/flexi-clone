import React from 'react';
import { Nav, NavbarBrand, Button} from 'react-bootstrap';
import './Header.css';

const Header = () => {

  return (
    <Nav className='nav d-flex justify-content-between py-3'>
      <Nav.Item className='brand-con'>
        <NavbarBrand>
          <Nav.Link> <img src="/flexisaf-imagery/Chrome-Images/606c20478671192ef5a51ff0_fs-logo.svg" alt="logo" /></Nav.Link>
        </NavbarBrand>
      </Nav.Item>

      <Nav.Item >

        <div className='nav-ul'>

          <Nav.Link className='text-black'>Company</Nav.Link>
          <Nav.Link className='text-black'>Product</Nav.Link>
          <Nav.Link className='text-black'>Career</Nav.Link>
          <Nav.Link className='text-black'>Blog</Nav.Link>

          <button className="my-btn px-4 py-2 text-white bg-primary">Contact us</button>
        </div>
      </Nav.Item>

      {/* <Nav.Item className='nav-button btn btn-link'>
        <button className='d-none'>m</button>
      </Nav.Item> */}
    </Nav>
  )
}


export default Header