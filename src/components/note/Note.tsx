import { ListItem, ListItemButton, Checkbox, ListItemText, TextField } from '@mui/material';
import React, { useContext, useState } from 'react';
import { NotesContext, NotesContextType } from '../context/NotesProvider';
import { NoteSecondActions } from './NoteSecondActions';

export type NoteProps = {
  id: string;
  isChecked: boolean;
  title: string;
};

const STROKED_TEXT_STYLES = { textDecoration: 'line-through' };

export function Note({ id, isChecked, title }: NoteProps) {
  const [isCurrentChecked, setIsCurrentChecked] = useState(isChecked);
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(title);
  const { toggleNoteStatus, deleteNote, editNote } = useContext<NotesContextType>(NotesContext);

  const handleChange = () => {
    setIsCurrentChecked(!isCurrentChecked);
    toggleNoteStatus(id);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return <ListItem
    disablePadding
    onClick={!isEdit ? handleChange : () => void 0}
    secondaryAction={<NoteSecondActions
      isEdit={isEdit}
      setIsEdit={setIsEdit}
      setValue={setValue}
      deleteNote={deleteNote}
      editNote={editNote}
      value={value}
      id={id}
    />}
  >
    <ListItemButton disableRipple={isEdit} dense>
      <Checkbox
        edge="start"
        tabIndex={-1}
        checked={isCurrentChecked}
        disableRipple
      />
      {
        !isEdit ? <ListItemText 
          sx={isCurrentChecked ? STROKED_TEXT_STYLES : undefined } 
          primary={title} 
        /> : <TextField 
          size="small"
          autoFocus 
          value={value} 
          onChange={handleValueChange}
        />
      }
    </ListItemButton>
  </ListItem>;
}