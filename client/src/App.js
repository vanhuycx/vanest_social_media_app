import './App.css';
import { useEffect } from 'react';
import vanestImage from './images/vanest.png';
import { Container, AppBar, Grow, Grid } from '@mui/material';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
