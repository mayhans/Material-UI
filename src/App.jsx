import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ButtonAppBar from './components/BasicAppBar/BasicAppBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Container sx={{ bgcolor: 'coral', height: '100vh', width: {
          xs: '100%',  // 0px and up
          sm: '100%',   // 600px and up
          md: '33.33%', // 900px and up
        }
        }}>
          <ButtonAppBar />
        <Box sx={{ bgcolor: 'purple'}}></Box>
      </Container>
    </>
  )
}

export default App
