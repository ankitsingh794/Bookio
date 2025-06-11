import React from 'react';
import { TextField, InputAdornment, useMediaQuery } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = ({ placeholder = "Search events..." }) => {
  // Responsive font size and padding
  const isMobile = useMediaQuery('(max-width:600px)');
  const fontSize = isMobile ? '0.95rem' : '1.1rem';
  const paddingY = isMobile ? '8px' : '12px';
  const iconSize = isMobile ? 22 : 26;

  return (
    <TextField
      variant="outlined"
      fullWidth
      placeholder={placeholder}
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        borderRadius: 2,
        input: {
          color: '#fff',
          fontSize,
          paddingY,
        },
        '& .MuiOutlinedInput-root': {
          fontSize,
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
            <SearchIcon style={{ color: '#7df9ff', fontSize: iconSize }} />
          </InputAdornment>
        ),
        style: {
          fontSize,
          paddingTop: paddingY,
          paddingBottom: paddingY,
        }
      }}
    />
  );
};

export default SearchBar;
