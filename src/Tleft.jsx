import React from "react";
import Check from "@mui/icons-material/CheckSharp";
import Close from "@mui/icons-material/CloseSharp";
import { Button } from "@mui/material";
import './Tleft.css'
function Tleft() {
  return (
    <div className="tleft">
      <div className="tlbody">
      <h4>FREE</h4>
      <Button variant="contained" color="success" sx={{borderRadius:'2rem'}}>
        Sign Up - it's Free
      </Button>
      <hr />
      <Check color="success" />
      125 words in the Paraphraser
      <hr />
      <Check color="success" />
      Standard and Fluency modes
      <hr />
      <Check color="success" />3 synonym options
      <hr />
      <Check color="success" />1 Freeze word or phrase
      <hr />
      <Check color="success" />
      1200 words in the Summarizer
      <hr />
      <Close color="error" />
      Faster processing speed
      <hr />
      <Close color="error" />
      Advanced grammar rewrites
      <hr />
      <Close color="error" />
      Compare Modes (Desktop only)
      <hr />
      <Close color="error" />
      Plagiarism Checker*
      <hr />
      <Close color="error" />
      Tone detection
      <hr />
      <p>No Credit Card Required</p>
      </div>
    </div>
  );
}

export default Tleft;
