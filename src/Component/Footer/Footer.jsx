import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
//import IconButton from "@mui/material/IconButton";
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from "@mui/material/IconButton";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import MailIcon from '@mui/icons-material/Mail';
import ShareIcon from '@mui/icons-material/Share';

export default function App() {
  return (
    <>
    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Connect with us
    
      </div>
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <IconButton color="primary" aria-label="Instagram">
                <InstagramIcon />
              </IconButton>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <IconButton color="primary" aria-label="Facebook" >
                <FacebookIcon />
              </IconButton>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <IconButton color="primary" aria-label="Twitter">
                <TwitterIcon/>
              </IconButton>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <IconButton color="primary" aria-label="Reddit">
                <RedditIcon/>
              </IconButton>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <IconButton color="primary" aria-label="Mail">
                <MailIcon/>
              </IconButton>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <IconButton color="primary" aria-label="share">
                <MailIcon/>
              </IconButton>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright :
        <a className='text-white' href=''>
          Mavrick
        </a>
      </div>
    </MDBFooter>
    </>
  );
}