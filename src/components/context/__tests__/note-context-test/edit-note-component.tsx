import React, { useContext, useEffect } from 'react';
import { NotesContext } from '../../NotesProvider';

export function EditNoteComponent() {
  const { notes, addNote, editNote } = useContext(NotesContext);
  
  useEffect(() => {
    addNote({
      id: '1',
      title: 'note 1',
      isChecked: false,
    });

    editNote('1', 'note 5');
  }, []);

  return <>
    <p data-testid="notes">{notes[0]?.title}</p>
  </>;
}