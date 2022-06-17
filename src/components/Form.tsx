import React, { useContext, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { NotesContext } from './context/NotesProvider';
import { v4 as uuidv4 } from 'uuid';

export function Form() {
  const { addNote } = useContext(NotesContext);
  
  const [value, setValue] = useState('');

  const handleSubmit = function (event: React.SyntheticEvent) {
    event.preventDefault();

    if (!value.trim()) return;

    addNote({
      id: uuidv4(),
      isChecked: false,
      title: value,
    });
    
    setValue('');
  };
  
  const handleTextChange = function (event: React.ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <TextField 
        value={value} 
        id="standard-basic"
        label="What needs to be done?" 
        variant="standard" 
        onChange={handleTextChange}
        fullWidth
      />
    </Box>
  );
}