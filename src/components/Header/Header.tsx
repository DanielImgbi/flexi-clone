import React from 'react';
import { Nav, NavbarBrand} from 'react-bootstrap';

const Header = () => {
  return (
    <Nav className='nav bg-secondary d-flex justify-content-between py-3'>
      <Nav.Item className=''>
        <NavbarBrand>
          <Nav.Link> Flexisaf</Nav.Link>
        </NavbarBrand>
      </Nav.Item>

      <Nav.Item className='d-flex'>
        <Nav.Link>Product</Nav.Link>
        <Nav.Link>Career</Nav.Link>
        <Nav.Link>Blog</Nav.Link>
      </Nav.Item>
    </Nav>
  )
}


export default Header