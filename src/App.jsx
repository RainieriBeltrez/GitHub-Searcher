import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";

import Searcher from "./Components/Searcher";

import { getGitHubUser } from './services/users'

const App = () => {

  const[inputUser, setInputUser] = useState('octocat');
  const[userStater, userState] = useState('userState')
  
  const gettinUser = async (user) => {
    const userResponse = await getGitHubUser(user)
    console.log(userResponse);
  }

  useEffect(() =>{
    gettinUser(inputUser)
  },
  [inputUser])

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
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
    
  )
};

export default App;