import React from 'react'
import Check from '@mui/icons-material/CheckSharp';
import Info from '@mui/icons-material/InfoSharp';
import { Button } from '@mui/material'
import './Tright.css'
function Tright() {
  return (
    <div className='tright'>
        <div className='trbody'>
        <h4>PREMIUM</h4>
        <Button variant="contained" color="success" sx={{borderRadius:'2rem'}}>Upgrade to Premium</Button><hr/>
        <Check color="success"/><label> Unlimited words in the Paraphraser</label><><Info color='action'/></><hr/>
        <Check color="success"/><lable> Standard, Fluency, Expand, Shorten, Formal, Simple, and Creative modes</lable><Info color='action'/><hr/>
        <Check color="success"/><lable> 4 synonym options</lable><Info color='action'/><hr/>
        <Check color="success"/><lable> Unlimited Freeze words and phrases</lable><Info color='action'/><hr/>
        <Check color="success"/><lable> 6000 words in the Summarizer</lable><Info color='action'/><hr/>
        <Check color="success"/><lable> Faster processing speed</lable><Info color='action'/><hr/>
        <Check color="success"/><lable> Advanced grammar rewrites</lable><Info color='action'/><hr/>
        <Check color="success"/><lable> Compare Modes (Desktop only)</lable><Info color='action'/><hr/>
        <Check color="success"/><lable> Plagiarism Checker*</lable><Info color='action'/><hr/>
        <Check color="success"/><lable> Tone detection</lable><Info color='action'/><hr/>
        <p>3-Day Money-Back Guarantee</p>
        </div>
    </div>
  )
}

export default Tright