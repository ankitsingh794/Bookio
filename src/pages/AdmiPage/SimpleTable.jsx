import React from "react";
import {
    Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';


const SimpleTable = ({ data, columns }) => (
    <TableContainer component={Paper} sx={{ mb: 3 }}>
        <Table>
            <TableHead>
                <TableRow>
                    {columns.map((col, idx) => <TableCell key={idx}>{col.header}</TableCell>)}
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((row, idx) => (
                    <TableRow key={idx}>
                        {columns.map((col, i) => (
                            <TableCell key={i}>{row[col.accessor]}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
);

export default SimpleTable;