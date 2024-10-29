import React from 'react';
import './App.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ButtonAppBar from './components/BasicAppBar/BasicAppBar';

function App() {

  return (
    <>
      <Container sx={{ bgcolor: '#342E37', height: '100vh', width: {
          xs: '100%',  // 0px and up
          sm: '100%',   // 600px and up
          md: '100%', // 900px and up
          lg: '100%', // 1280px and up
          xl: '100%', // 1920px and up
        } , padding: 0 //had to add padding 0 on here to fix padding issue with nav bar
        }}>
          <ButtonAppBar />
        <Box sx={{ bgcolor: 'purple'}}></Box>
      </Container>
    </>
  )
}

export default App
