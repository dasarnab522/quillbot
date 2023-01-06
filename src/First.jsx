import { Button } from '@mui/material'
import React from 'react'
import './First.css'

function First() {
  return (
    <div className='first'>
    <h1>Save time and write with confidence</h1>
    <Button variant="contained" color="success" sx={{borderRadius:'2rem'}}>Upgrade to QuillBot Premium</Button>
    </div>
  )
}

export default First