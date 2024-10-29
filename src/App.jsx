import React from 'react';
import './App.css'
import { createTheme, ThemeProvider } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ButtonAppBar from './components/BasicAppBar/BasicAppBar';

const theme = createTheme({
  palette: {
    primary: {
      main: '#342E37',
    },
  },
  // components: {
  //   MuiButton: {
  //     styleOverrides: {
  //       root: {
  //         '&hover': {
  //           backgroundColor: '#FA824C', //my custom hover color
  //         },
  //       },
  //     },
  //   },
  // },
  // ABOVE hover effect was not working figure out later
})

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <Container sx={{ bgcolor: 'primary.main', height: '100vh', width: '100%' , padding: 0 //had to add padding 0 on here to fix padding issue with nav bar
          }}>
            <ButtonAppBar />
          <Box sx={{ bgcolor: 'purple', height: '100px' }}></Box>
        </Container>
      </ThemeProvider>
    </>
  )
}

export default App
