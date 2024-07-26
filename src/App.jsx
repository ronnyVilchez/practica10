import React from 'react'
import Navbar from './components/Navbar'

import CardImg from './components/Card'
import { Box } from '@mui/material'

export default function App() {
  return (
    <Box sx={{
      padding:{
        xs: '0' ,
        sm:'2rem'}
    
    }}> 
    <Navbar/>
    <CardImg/>
    </Box>
  )
}
