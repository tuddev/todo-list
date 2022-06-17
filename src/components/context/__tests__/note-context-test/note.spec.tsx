import { screen, render } from '@testing-library/react';
import { NotesProvider } from '../../NotesProvider';
import React from 'react';
import { StorageProvider } from '../../StorageProvider';
import { AddNoteComponent } from './add-note-component';
import { EditNoteComponent } from './edit-note-component';
import { CheckedNoteComponent } from './checked-note-component';
import { DeleteNoteComponent } from './delete-checked-note-component';
import { DeleteCompletedNoteComponent } from './delete-completed-note-component';

describe('Providers test', () => {
  test('addNote', () => {
    render( 
      <StorageProvider fieldName='notes'>
        <NotesProvider>
            <AddNoteComponent/>
        </NotesProvider>
      </StorageProvider>,
    );
    const notes = screen.getByTestId('notes');

    expect(notes.textContent).toEqual('note 1');
  });
  test('editNote', () => {
    render( 
      <StorageProvider fieldName='notes'>
        <NotesProvider>
            <EditNoteComponent/>
        </NotesProvider>
      </StorageProvider>,
    );
    const notes = screen.getByTestId('notes');

    expect(notes.textContent).toEqual('note 5');
  });
  test('checkNote', () => {
    render( 
      <StorageProvider fieldName='notes'>
        <NotesProvider>
            <CheckedNoteComponent/>
        </NotesProvider>
      </StorageProvider>,
    );
    const notes = screen.getByTestId('notes');

    expect(notes.textContent).toEqual('true');
  });
  test('deleteNote', () => {
    render( 
      <StorageProvider fieldName='notes'>
        <NotesProvider>
            <DeleteNoteComponent/>
        </NotesProvider>
      </StorageProvider>,
    );
    const notes = screen.getByTestId('notes');

    expect(notes.textContent).toEqual('true');
  });
  test('deleteComplitedNote', () => {
    render( 
      <StorageProvider fieldName='notes'>
        <NotesProvider>
            <DeleteCompletedNoteComponent/>
        </NotesProvider>
      </StorageProvider>,
    );
    const notes = screen.getByTestId('notes');

    expect(notes.textContent).toEqual('true');
  });
});
