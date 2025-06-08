import React from 'react';
import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ placeholder = "Search events..." }) => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      placeholder={placeholder}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderRadius: 2,
        input: { color: '#fff' },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'rgba(255,255,255,0.2)',
          },
          '&:hover fieldset': {
            borderColor: '#7df9ff',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#7df9ff',
          },
        },
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon style={{ color: '#7df9ff' }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
