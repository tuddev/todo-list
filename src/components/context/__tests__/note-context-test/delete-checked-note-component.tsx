import React, { useContext, useEffect } from 'react';
import { NotesContext } from '../../NotesProvider';

export function DeleteNoteComponent() {
  const { notes, addNote, deleteNote } = useContext(NotesContext);
  
  useEffect(() => {
    addNote({
      id: '1',
      title: 'note 1',
      isChecked: false,
    });

    deleteNote('1');
  }, []);

  return <>
    <p data-testid="notes">{notes.length === 0 ? 'true' : 'false'}</p>
  </>;
}