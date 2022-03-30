import './App.css';
import vanestImage from './images/vanest.png';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';

const App = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <AppBar position='static' color='inherit'>
          {/* <Typography variant='h2' align='center'>
            Vanest
          </Typography> */}
          <img src={vanestImage}   alt='' />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify='space-between' alignItems='stretch' spacing={3}>

            </Grid>

          </Container>
        </Grow>
      </Container>
    </>
  );
};
export default App;
