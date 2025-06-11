import React from "react";
import {
    Table, TableBody,
    TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';


const SimpleTable = ({ data, columns }) => {
    // Responsive: detect mobile
    const isMobile = window.matchMedia("(max-width: 600px)").matches;

    return (
        <TableContainer
            component={Paper}
            sx={{
                mb: 3,
                width: "100vw",
                maxWidth: "100vw",
                overflowX: "auto",
                boxSizing: "border-box",
                borderRadius: isMobile ? "0.7rem" : "1rem",
            }}
        >
            <Table
                sx={{
                    minWidth: 320,
                    fontSize: isMobile ? "0.95rem" : "1rem",
                }}
                size={isMobile ? "small" : "medium"}
            >
                <TableHead>
                    <TableRow>
                        {columns.map((col, idx) => (
                            <TableCell
                                key={idx}
                                sx={{
                                    fontSize: isMobile ? "0.98rem" : "1.05rem",
                                    padding: isMobile ? "0.4rem 0.3rem" : undefined,
                                    fontWeight: 600,
                                    background: "#0a0a23",
                                    color: "#7DF9FF",
                                    borderBottom: "2px solid #7DF9FF",
                                    whiteSpace: "nowrap"
                                }}
                            >
                                {col.header}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, idx) => (
                        <TableRow key={idx}>
                            {columns.map((col, i) => (
                                <TableCell
                                    key={i}
                                    sx={{
                                        fontSize: isMobile ? "0.93rem" : "1rem",
                                        padding: isMobile ? "0.4rem 0.3rem" : undefined,
                                        wordBreak: "break-word",
                                        maxWidth: isMobile ? "120px" : "300px",
                                    }}
                                >
                                    {row[col.accessor]}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default SimpleTable;