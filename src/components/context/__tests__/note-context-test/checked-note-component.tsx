import React, { useContext, useEffect } from 'react';
import { NotesContext } from '../../NotesProvider';

export function CheckedNoteComponent() {
  const { notes, addNote, toggleNoteStatus } = useContext(NotesContext);
  
  useEffect(() => {
    addNote({
      id: '1',
      title: 'note 1',
      isChecked: false,
    });

    toggleNoteStatus('1');
  }, []);

  return <>
    <p data-testid="notes">{notes[0]?.isChecked ? 'true' : 'false'}</p>
  </>;
}