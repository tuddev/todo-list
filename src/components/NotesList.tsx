import React, { useContext } from 'react';
import List from '@mui/material/List';
import { Note } from './note';
import { ViewNotesContext } from './context';

const CUSTOM_LIST_STYLES = { width: '100%', bgcolor: 'background.paper' };

export function NotesList() {
  const { viewNotes } = useContext(ViewNotesContext);

  return (
    <List sx={CUSTOM_LIST_STYLES}>
      {
        viewNotes.map((value) => {
          return <Note 
            key={value.id} 
            id={value.id} 
            isChecked={value.isChecked} 
            title={value.title}
          />;
        })
      }
    </List>
  );
}
