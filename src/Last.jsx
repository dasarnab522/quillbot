import React from "react";
import "./Last.css";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

function Last() {
  function CircularProgressWithLabel(a, b, c) {
    return (
      <Box
        sx={{
          position: "relative",
          display: "flex",
          textAlign: "justify",
          left: "auto",
          flexDirection: "column",
          size: "10px",
          placeItems:"center",
          top:20
        }}
      >
        <CircularProgress
          variant="determinate"
          value={a}
          size="7rem"
          thickness={2}
          position="relative"
          sx={{
          color: (theme) =>
            theme.palette.mode === 'light' ? 'success.main' : 'text.secondary'
        }}
        />
        <Box
          sx={{
            top: 0,
            left: 185,
            bottom: 0,
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            color:"success.main",
          }}
        >
          <Typography
            variant="caption"
            component="div"
            color="success"
            fontSize="1.3rem"
          >
            {b}
          </Typography>
          <Typography
            variant="caption"
            component="div"
            color="success"
            fontSize=".8rem"
          >
            {c}
          </Typography>
        </Box>
      </Box>
    );
  }
  return (
    <div className="last">
      <div className="para">
        <h4>Write better, faster, and clearer instantly</h4>
        <p>QuillBot is trusted by students, professional writers, and </p>
        <p>business people who want to write more effectively.</p>
      </div>
      <div className="progg">
        <div className="prog1">
          {CircularProgressWithLabel(75, "75%", "time saved")}
          <p>Average time savings per writing project.</p>
        </div>
        <div className="prog2">
          {CircularProgressWithLabel(100, "50+", "million")}
          <p>Trusted by millions worldwide.</p>
        </div>
        <div className="prog3">
          {CircularProgressWithLabel(85, "85%", "of student")}
          <p>Who reported their grades improved after using QuillBot.</p>
        </div>
      </div>
    </div>
  );
}

export default Last;
