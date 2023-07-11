import { Box, Typography } from "@mui/material";
import React from "react";

function About() {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3" sx={{ fontFamily: "cursive" }}>
          Online Bookstore : Crud Application
        </Typography>
        <Typography sx={{ fontFamily: "cursive" }} variant="h4">
          By Saurabh
        </Typography>
        <Typography sx={{ fontFamily: "cursive" }} variant="h6">
          Based on MERN Stack
        </Typography>
      </Box>
    </div>
  );
}

export default About;
