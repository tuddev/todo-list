import React, { useContext, useEffect } from 'react';
import { NotesContext } from '../../NotesProvider';
import { ViewNotesContext } from '../../ViewNotesProvider';

export function ViewNotesContextComponent () {
  const { addViewNote, viewNotes } = useContext(ViewNotesContext);
  const { notes, addNote } = useContext(NotesContext); 

  useEffect(() => {
    addNote({
      id: '1',
      title: 'note 1',
      isChecked: false,
    });

    addViewNote(notes[0]);
  }, []);
  return <>
    <p data-testid="notes">{viewNotes[0]?.title}</p>
  </>;
}