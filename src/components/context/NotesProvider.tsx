import React, { useContext, useEffect, useState } from 'react';
import { NoteProps } from '../note/Note';
import { StorageContext } from './StorageProvider';

export type NotesContextType = {
  notes: Array<NoteProps>;
  addNote: (note: NoteProps) => void;
  clearCompletedNotes: () => void;
  toggleNoteStatus: (id: string) => void;
  editNote: (id: string, newTitle: string) => void;
  deleteNote: (id: string) => void;

};

export const NotesContext = React.createContext<NotesContextType>({
  notes: [],
  addNote: () => void 0,
  clearCompletedNotes: () => void 0,
  toggleNoteStatus: () => void 0,
  editNote: () => void 0,
  deleteNote: () => void 0,
});

export function NotesProvider({ children }: React.PropsWithChildren<object>) { 
  const { value, setStorage } = useContext(StorageContext);
  const [notes, setNotes] = useState<Array<NoteProps>>(JSON.parse(value) || []);

  useEffect(() => {
    setStorage(JSON.stringify(notes));
  }, [notes]);

  const addNote = function(note: NoteProps) {
    const newNotes = [note, ...notes];
    setNotes(newNotes);
  };

  const clearCompletedNotes = function() {
    const onlyCompletedNotes = notes.filter((note) => note.isChecked !== true);

    setNotes(onlyCompletedNotes);
  };

  const toggleNoteStatus = function(id: string) {
    let searchedNoteIndex = 0;

    for (let index = 0; index < notes.length; index++) {
      if (notes[index].id === id) {
        searchedNoteIndex = index;
      }
    }

    const newNotes = [
      ...notes.slice(0, searchedNoteIndex ), 
      { ...notes[searchedNoteIndex], isChecked: !notes[searchedNoteIndex].isChecked }, 
      ...notes.slice(searchedNoteIndex + 1),
    ];
    
    setNotes(newNotes);
  };

  const editNote = function(id: string, newTitle: string) {
    let searchedNoteIndex = 0;

    for (let index = 0; index < notes.length; index++) {
      if (notes[index].id === id) {
        searchedNoteIndex = index;
      }
    }

    const newNotes = [
      ...notes.slice(0, searchedNoteIndex ), 
      { ...notes[searchedNoteIndex], title: newTitle }, 
      ...notes.slice(searchedNoteIndex + 1),
    ];

    setNotes(newNotes);
  }; 

  const deleteNote = function(id: string) {
    const newNotes = notes.filter((note) => note.id !== id);

    setNotes(newNotes);
  };

  return <NotesContext.Provider value={{ 
    notes, 
    addNote, 
    clearCompletedNotes,
    toggleNoteStatus,
    editNote,
    deleteNote,
  }}
  >
    {children}
  </NotesContext.Provider>;

}