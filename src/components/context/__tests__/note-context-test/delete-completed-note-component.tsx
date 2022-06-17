import React, { useContext, useEffect } from 'react';
import { NotesContext } from '../../NotesProvider';

export function DeleteCompletedNoteComponent() {
  const { notes, addNote, clearCompletedNotes } = useContext(NotesContext);
  
  useEffect(() => {
    addNote({
      id: '1',
      title: 'note 1',
      isChecked: true,
    });
    addNote({
      id: '2',
      title: 'note 1',
      isChecked: true,
    });
    clearCompletedNotes();
  }, []);

  return <>
    <p data-testid="notes">{notes.length === 0 ? 'true' : 'false'}</p>
  </>;
}