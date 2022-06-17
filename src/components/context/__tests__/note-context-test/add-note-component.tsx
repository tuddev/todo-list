import React, { useContext, useEffect } from 'react';
import { NotesContext } from '../../NotesProvider';

export function AddNoteComponent() {
  const { notes, addNote } = useContext(NotesContext);
  
  useEffect(() => {
    addNote({
      id: '1',
      title: 'note 1',
      isChecked: false,
    });
  }, []);

  return <>
    <p data-testid="notes">{notes[0]?.title}</p>
  </>;
}