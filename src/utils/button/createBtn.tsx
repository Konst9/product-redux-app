import React from 'react';
import IconButton from '@mui/material/IconButton';
import AddCircleIcon from '@mui/icons-material/AddCircle';

function CreateBtn() {
  return (
    <IconButton aria-label="create" color="primary">
      <AddCircleIcon color="primary" fontSize="large" />
    </IconButton>
  );
}

export default CreateBtn;