import React from 'react'
import {CgMenuGridO}  from 'react-icons/cg';
import Button from '@mui/material/Button';


const Navbar = () => {
  return (
    <div className='navbar'>
    <a href="">Gmail</a>
    <a href="">Images</a>
     <CgMenuGridO size={'25px'} className='menu'/>
     <Button variant="contained" className='btn'>Sign in</Button>
    </div>
  )
}

export default Navbar
