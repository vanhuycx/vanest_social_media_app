import './App.css';
import vanestImage from './images/vanest.png';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';

const App = () => {
  return (
    <>
      <Container maxWidth='lg'>
        <AppBar className='appBar' position='static' color='inherit'>
          <img
            className='image'
            src={vanestImage}
            height={100}
            width={100}
            alt=''
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justify='space-between'
              alignItems='stretch'
              spacing={3}
            >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  );
};
export default App;
