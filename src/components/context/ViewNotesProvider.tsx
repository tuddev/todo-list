import React, { useContext, useEffect, useState } from 'react';
import { FilterType } from '../../types';
import { NoteProps } from '../note/Note';
import { NotesContext } from './NotesProvider';

export type ViewNotesContextType = {
  viewNotes: Array<NoteProps>;
  addViewNote: (value: NoteProps) => void;
  activeFilter: FilterType;
  filterOnlyCompleted: VoidFunction;
  filterOnlyActive: VoidFunction;
  filterAll: VoidFunction;
  clearCompletedNotes: VoidFunction;
};

export const ViewNotesContext = React.createContext<ViewNotesContextType>({
  viewNotes: [],
  activeFilter: FilterType.ALL,
  addViewNote: () => void 0,
  filterOnlyCompleted: () => void 0,
  filterOnlyActive: () => void 0,
  filterAll: () => void 0,
  clearCompletedNotes: () => void 0,
});

export const filterReducer = (filter: FilterType, notes: Array<NoteProps>): Array<NoteProps> => {
  switch (filter) {
    case FilterType.ACTIVE: {
      return notes.filter((note) => note.isChecked !== true);
    }
    case FilterType.COMPLETED: {
      return notes.filter((note) => note.isChecked === true);
    }
    default: {
      return notes;
    }
  }
};

export function ViewNotesProvider({ children }: React.PropsWithChildren) {
  const { notes, clearCompletedNotes } = useContext(NotesContext);
  
  const [viewNotes, setViewNotes] = useState(notes);
  const [activeFilter, setActiveFilter] = useState(FilterType.ALL);

  useEffect(() => {
    setViewNotes(filterReducer(activeFilter, notes));
  }, [notes]);

  const handleAddViewNote = function(note: NoteProps) {
    setViewNotes([note, ...viewNotes]);
  };

  const filterOnlyCompleted = function() {
    const onlyCheckedNotes = filterReducer(FilterType.COMPLETED, notes);

    setViewNotes(onlyCheckedNotes);
    setActiveFilter(FilterType.COMPLETED);
  };

  const filterOnlyActive = function() {
    const onlyActiveNotes = filterReducer(FilterType.ACTIVE, notes);

    setViewNotes(onlyActiveNotes);
    setActiveFilter(FilterType.ACTIVE);
  };

  const filterAll = function() {
    setViewNotes(notes);
    setActiveFilter(FilterType.ALL);
  };

  return <ViewNotesContext.Provider value={{
    viewNotes,
    addViewNote: handleAddViewNote,
    activeFilter,
    filterOnlyCompleted, 
    filterOnlyActive,
    filterAll,
    clearCompletedNotes,
  }}>
    {children}
  </ViewNotesContext.Provider>;  
}