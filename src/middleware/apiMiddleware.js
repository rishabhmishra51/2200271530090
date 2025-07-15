import React from 'react';
import ShortenForm from './components/ShortenForm';
import { Container, Typography } from '@mui/material';

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        URL Shortener
      </Typography>
      <ShortenForm />
    </Container>
  );
}

export default App;
