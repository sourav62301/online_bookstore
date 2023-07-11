import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography
          variant="h3"
          sx={{ fontFamily: "cursive", marginTop: 5, color: "black" }}
        >
          Welcome to Online BookStore
        </Typography>

        <Button
          LinkComponent={Link}
          to="/books"
          variant="contained"
          sx={{
            marginTop: 15,
            background: "tomato",
            borderRadius: 10,
            padding: 3,
          }}
        >
          <Typography variant="h4">View All Books</Typography>
        </Button>
      </Box>
    </div>
  );
}

export default Home;
