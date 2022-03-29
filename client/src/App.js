import './App.css';
import vanestImage from './vanest.png';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';

const App = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <AppBar position='static' color='inherit'>
          {/* <Typography variant='h2' align='center'>
            Vanest
          </Typography> */}
          <img src={vanestImage} height='400' alt='' />
        </AppBar>
      </Container>
    </>
  );
};
export default App;
