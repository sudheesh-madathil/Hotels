import  { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
 
  MDBCollapse,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
 function Nav() {
  const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar className='nav' expand='lg' light bgColor='light' sticky>
      <MDBContainer fluid>
        <MDBNavbarBrand href='#'><h3>Brand</h3> </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current='page' href='#'>
            
              </MDBNavbarLink>
            </MDBNavbarItem>
       

            {/* <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag='a' className='nav-link' role='button'>
                  Dropdown
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link>Action</MDBDropdownItem>
                  <MDBDropdownItem link>Another action</MDBDropdownItem>
                  <MDBDropdownItem link>Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem> */}

          
          </MDBNavbarNav>

          <form className='d-flex input-group w-auto '>
          <h5 style={{paddingRight: "27px"}}>   <Link to="/">Home</Link></h5>
  
            <h5 style={{paddingRight: "27px"}}><Link to="/About">About</Link></h5>
            <h5 style={{paddingRight: "27px"}}><Link to="/Contact">Contact</Link></h5>
            {/* <input type='search' className='form-control' placeholder='Type query' aria-label='Search' /> */}
            {/* <MDBBtn style={{borderColor:'black'}} color='white'><h5>Login</h5> </MDBBtn> */}
            <button style={{borderRadius: 9,width:"100px",backgroundColor:'white'}}> <h5><Link to='/Login' >login</Link></h5> </button>
          </form>
        </MDBCollapse>
      </MDBContainer>

    </MDBNavbar>
    
  );
}export{Nav}