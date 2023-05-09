import React from "react";
import { Container } from "@mui/material";

import Searcher from "./Components/Searcher";


const App = () => {
  return(
    <Container sx={{
      background: '#100e17',
      width: '80vw',
      height: '500px',
      borderRadius: '16px',
      marginTop: '40px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
      overflow: "hidden",
    }} >
      <Searcher />
    </Container>
    
  )
};

export default App;