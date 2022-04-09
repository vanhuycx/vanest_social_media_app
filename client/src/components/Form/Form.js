import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@mui/material';

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });

  const handleSubmit = () => {};
  return (
    <>
      <Paper className='paper'>
        <form
          className='form'
          noValidate
          onSubmit={handleSubmit}
          autoComplete='off'
        >
          <Typography variant='h6'>Creating a post</Typography>
          <TextField
            name='creator'
            variant='outlined'
            label='Creator'
            fullWidth
            value={postData.creator}
            onChange={(e) =>
              setPostData({ ...postData, creator: e.target.value })
            }
          ></TextField>
        </form>
      </Paper>
    </>
  );
};

export default Form;
