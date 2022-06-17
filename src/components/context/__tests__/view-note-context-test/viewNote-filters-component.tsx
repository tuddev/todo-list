import React from 'react';
import { FilterType } from '../../../../types';
import { filterReducer } from '../../ViewNotesProvider';

export function ViewNotesFiletrsComponent () {
  const viewNotes = [
    {
      id: '1',
      title: 'note 1',
      isChecked: false,
    },
    {
      id: '2',
      title: 'note 2',
      isChecked: true,
    },
    {
      id: '3',
      title: 'note 3',
      isChecked: false,
    },
  ];

  return <>
    <p data-testid="notes-all">{filterReducer(FilterType.ALL, viewNotes).length}</p>
    <p data-testid="notes-active">{filterReducer(FilterType.ACTIVE, viewNotes).length}</p>
    <p data-testid="notes-complete">{filterReducer(FilterType.COMPLETED, viewNotes).length}</p>
  </>;
}