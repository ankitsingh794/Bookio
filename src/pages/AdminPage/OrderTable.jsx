import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    TextField, Select, MenuItem, Button, Pagination, Box
} from '@mui/material';
import './Style/Dashboard.css';
import React from 'react';
import { useState } from 'react';

const OrdersTable = ({ orders }) => {
    const [statusFilter, setStatusFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);

    const itemsPerPage = 20;

    const getMonthYear = (dateStr) => {
        const date = new Date(dateStr);
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();
        return `${month} ${year}`;
    };

    const filteredOrders = orders.filter(order => {
        const matchesStatus = statusFilter ? order.status === statusFilter : true;
        const matchesCategory = categoryFilter ? order.category === categoryFilter : true;
        const matchesDate = dateFilter ? getMonthYear(order.date) === dateFilter : true;
        const matchesSearch =
            order.invoice.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.customer.toLowerCase().includes(searchQuery.toLowerCase()) ||
            order.email.toLowerCase().includes(searchQuery.toLowerCase());

        return matchesStatus && matchesCategory && matchesDate && matchesSearch;
    });


    const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
    const paginatedOrders = filteredOrders.slice(
        (page - 1) * itemsPerPage,
        page * itemsPerPage
    );


    const handleFilterChange = (setter) => (e) => {
        setter(e.target.value);
        setPage(1);
    };

    const isMobile = window.matchMedia("(max-width: 600px)").matches;
    const filterSx = {
        color: 'white',
        fontSize: isMobile ? "1rem" : undefined,
        width: isMobile ? "100%" : "10vw",
        minWidth: isMobile ? "0" : undefined,
        marginBottom: isMobile ? "0.5rem" : undefined,
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#374151',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#10b981',
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#10b981',
        },
        svg: { color: 'white' }
    };

    return (
        <div className='order-wrap'>
            <div className="orders-header">
                <h2 className="orders-title">
                    <span className="orders-title-icon">📦</span>
                    Orders
                </h2>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: '#10b981',
                        '&:hover': {
                            backgroundColor: '#059669',
                        },
                        textTransform: 'none',
                        fontWeight: 'bold',
                    }}
                >
                    Download PDF
                </Button>
            </div>
            <div className="filters" style={{
                display: "flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? "0.5rem" : "1rem",
                marginBottom: "1rem",
                width: "100%"
            }}>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    sx={{
                        input: { color: 'white' },
                        fontSize: isMobile ? "1rem" : undefined,
                        width: isMobile ? "100%" : "46.4vw",
                        marginBottom: isMobile ? "0.5rem" : undefined,
                        '& .MuiOutlinedInput-root': {
                            '& fieldset': { borderColor: '#374151' },
                            '&:hover fieldset': { borderColor: '#10b981' },
                            '&.Mui-focused fieldset': { borderColor: '#10b981' },
                        },
                    }}
                />
                <Select
                    variant="outlined"
                    size="small"
                    fullWidth={isMobile}
                    displayEmpty
                    value={statusFilter}
                    onChange={handleFilterChange(setStatusFilter)}
                    sx={filterSx}
                >
                    <MenuItem value="">Filter by status</MenuItem>
                    <MenuItem value="Paid">Paid</MenuItem>
                    <MenuItem value="Refunded">Refunded</MenuItem>
                    <MenuItem value="Cancelled">Cancelled</MenuItem>
                </Select>
                <Select
                    variant="outlined"
                    size="small"
                    fullWidth={isMobile}
                    displayEmpty
                    value={categoryFilter}
                    onChange={handleFilterChange(setCategoryFilter)}
                    sx={filterSx}
                >
                    <MenuItem value="">All Categories</MenuItem>
                    <MenuItem value="Concert">Concert</MenuItem>
                    <MenuItem value="Workshop">Workshop</MenuItem>
                </Select>
                <Select
                    variant="outlined"
                    size="small"
                    fullWidth={isMobile}
                    displayEmpty
                    value={dateFilter}
                    onChange={handleFilterChange(setDateFilter)}
                    sx={filterSx}
                >
                    <MenuItem value="">All Months</MenuItem>
                    {[...new Set(orders.map(o => getMonthYear(o.date)))].map((monthYear, idx) => (
                        <MenuItem key={idx} value={monthYear}>{monthYear}</MenuItem>
                    ))}
                </Select>

            </div>

            <TableContainer component={Paper} className="table-container">
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Invoice</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Customer</TableCell>
                            <TableCell>Receipt</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedOrders.map((order, idx) => (
                            <TableRow key={idx}>
                                <TableCell>{order.invoice}</TableCell>
                                <TableCell>{order.date}</TableCell>
                                <TableCell>
                                    <span className={`status ${order.status.toLowerCase()}`}>{order.status}</span>
                                </TableCell>
                                <TableCell>
                                    <div className="customer-info">
                                        <div className="avatar">{order.customer[0]}</div>
                                        <div>
                                            <div>{order.customer}</div>
                                            <div className="email">{order.email}</div>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell><a href="#">Download</a></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                <Pagination
                    count={totalPages}
                    page={page}
                    onChange={(e, value) => setPage(value)}
                    variant="outlined"
                    shape="rounded"
                    sx={{
                        '& .MuiPaginationItem-root': {
                            color: '#fff',
                            borderColor: '#374151',
                        },
                        '& .Mui-selected': {
                            backgroundColor: '#10b981',
                            color: '#fff',
                        },
                    }}
                />

            </Box>
        </div>
    );
};

export default OrdersTable;
