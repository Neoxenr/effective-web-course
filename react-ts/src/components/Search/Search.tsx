import React, { ReactElement } from 'react';

// MUI
import { Button, TextField, Toolbar } from '@mui/material';

interface SearchProps {
  title?: string;
}

function Search({ title }: SearchProps): ReactElement {
  return (
    <Toolbar
      sx={{
        justifyContent: 'space-between',
        padding: '0 !important',
        marginBottom: '50px'
      }}
    >
      <TextField
        placeholder={`Search for ${title} by Name`}
        size="small"
        sx={{ width: '80%' }}
      />
      <Button variant="contained" sx={{ width: '15%', bgcolor: 'orange' }}>
        Search
      </Button>
    </Toolbar>
  );
}

export default Search;
