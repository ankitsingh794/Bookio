import * as React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import './Style/DOBPicker.css';

export default function DOBPicker() {
  const [value, setValue] = React.useState(dayjs('2000-01-01'));

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Date of Birth"
        value={value}
        onChange={(newValue) => setValue(newValue)}
        views={['year', 'month', 'day']}
        openTo="year"
        disableFuture
        minDate={dayjs('1900-01-01')}
        maxDate={dayjs()}
         slotProps={{textField: {className: 'custom-dob-input',helperText: 'MM/DD/YYYY'}}}
        />
    </LocalizationProvider>
  );
};
