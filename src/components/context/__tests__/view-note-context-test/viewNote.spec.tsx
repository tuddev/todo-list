import { screen, render } from '@testing-library/react';
import React from 'react';
import { NotesProvider } from '../../NotesProvider';
import { StorageProvider } from '../../StorageProvider';
import { ViewNotesProvider } from '../../ViewNotesProvider';
import { ViewNotesFiletrsComponent } from './viewNote-filters-component';

describe('Providers test', () => {
  test('addViewNote', () => {
    render( 
      <StorageProvider fieldName='notes'>
        <NotesProvider>
          <ViewNotesProvider>
            <ViewNotesFiletrsComponent/>
          </ViewNotesProvider>
        </NotesProvider>
      </StorageProvider>,
    );
    const notesAll = screen.getByTestId('notes-all');
    const notesActive = screen.getByTestId('notes-active');
    const notesComplete = screen.getByTestId('notes-complete');

    expect(notesAll.textContent).toEqual('3');
    expect(notesActive.textContent).toEqual('2');
    expect(notesComplete.textContent).toEqual('1');
  });
});
