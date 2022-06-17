import { Button, ButtonGroup, Container, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useContext } from 'react';
import { ViewNotesContext } from './context';
import { FilterType } from '../types';

const FOOTER_STYLES = { display: 'flex', justifyContent: 'space-between' };

export function Footer() {
  const { 
    filterAll, 
    filterOnlyActive, 
    filterOnlyCompleted, 
    activeFilter,
    viewNotes,
    clearCompletedNotes,
  } = useContext(ViewNotesContext);

  return (
    <Container maxWidth="md" sx={FOOTER_STYLES}>
      <Typography>{viewNotes.length} notes</Typography>
      <ButtonGroup variant="outlined">
        <Button 
          variant={activeFilter === FilterType.ALL ? 'contained' : undefined} 
          onClick={filterAll}
        >
          All
        </Button>
        <Button 
          variant={activeFilter === FilterType.ACTIVE ? 'contained' : undefined} 
          onClick={filterOnlyActive}
        >
          Active
        </Button>
        <Button 
          variant={activeFilter === FilterType.COMPLETED ? 'contained' : undefined} 
          onClick={filterOnlyCompleted}
        >
          Completed
        </Button>
      </ButtonGroup>
      <Button variant="contained" startIcon={<DeleteIcon />} onClick={clearCompletedNotes}>
        Clear completed
      </Button>
    </Container>
  );
}