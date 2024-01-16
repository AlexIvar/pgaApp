import logo from './logo.svg';
import './App.css';
import Leaderboard from './components/Leaderboard';
import { AppBar } from '@mui/material';
import { Container } from '@mui/material';

function App() {
  return (
    <>
    <Container maxWidth="lg">
      <h2>Leaderboard</h2>
    <Leaderboard />
    </Container>
    </>
  );
}

export default App;
