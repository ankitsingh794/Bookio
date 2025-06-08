import React, { useState } from 'react';
import {
    Box,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    TextField, Select, MenuItem, InputLabel, FormControl,
    Checkbox, Button, Typography, Toolbar, Pagination
} from '@mui/material';
import { saveAs } from 'file-saver';
import { format } from 'date-fns';
import "./Style/UserListPage.css";
import UserDetailModal from './UserDetailModal';


const usersData = [
    { id: 'U001', fullName: 'John Doe', email: 'john@example.com', role: 'User', status: 'Active', regDate: '2024-11-20' },
    { id: 'U002', fullName: 'Jane Smith', email: 'jane@example.com', role: 'Admin', status: 'Suspended', regDate: '2024-10-15' },
    { id: 'U003', fullName: 'Alex Johnson', email: 'alex@example.com', role: 'Moderator', status: 'Active', regDate: '2024-12-01' },
    // Add more sample users here...
];

const roles = ['Admin', 'User', 'Moderator'];
const statuses = ['Active', 'Suspended', 'Banned'];

const UserListPage = () => {
    const [users, setUsers] = useState(usersData);
    const [searchQuery, setSearchQuery] = useState('');
    const [filterRole, setFilterRole] = useState('');
    const [filterStatus, setFilterStatus] = useState('');
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [openModal, setOpenModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);


    const itemsPerPage = 10;

    // Filtering logic
    const filteredUsers = users.filter(user => {
        const query = searchQuery.toLowerCase();
        if (
            !(
                user.id.toLowerCase().includes(query) ||
                user.fullName.toLowerCase().includes(query) ||
                user.email.toLowerCase().includes(query)
            )
        ) return false;
        if (filterRole && user.role !== filterRole) return false;
        if (filterStatus && user.status !== filterStatus) return false;
        return true;
    });

    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
        setSelectedUser(null);
    };


    // Toggle select user checkbox
    const toggleSelectUser = (id) => {
        setSelectedUsers(prev => prev.includes(id) ? prev.filter(u => u !== id) : [...prev, id]);
    };

    const paginatedUserData = filteredUsers.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    // Select all filtered users
    const toggleSelectAll = () => {
        if (selectedUsers.length === filteredUsers.length) setSelectedUsers([]);
        else setSelectedUsers(filteredUsers.map(u => u.id));
    };

    // Bulk action handlers (for demo, just remove from state)
    const bulkDelete = () => {
        setUsers(prev => prev.filter(user => !selectedUsers.includes(user.id)));
        setSelectedUsers([]);
    };

    const bulkActivate = () => {
        setUsers(prev =>
            prev.map(user => selectedUsers.includes(user.id) ? { ...user, status: 'Active' } : user)
        );
        setSelectedUsers([]);
    };

    const bulkSuspend = () => {
        setUsers(prev =>
            prev.map(user => selectedUsers.includes(user.id) ? { ...user, status: 'Suspended' } : user)
        );
        setSelectedUsers([]);
    };

    const bulkBanned = () => {
        setUsers(prev =>
            prev.map(user => selectedUsers.includes(user.id) ? { ...user, status: 'Banned' } : user)
        );
        setSelectedUsers([]);
    };

    // Export selected users to CSV
    const exportCSV = () => {
        const csvHeader = 'ID,Full Name,Email,Role,Status,Registration Date\n';
        const csvRows = users
            .filter(user => selectedUsers.includes(user.id))
            .map(u => `${u.id},${u.fullName},${u.email},${u.role},${u.status},${u.regDate}`)
            .join('\n');
        const csvContent = csvHeader + csvRows;
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'users_export.csv');
    };


    const sendNotification = () => {
        alert(`Notification sent to ${selectedUsers.length} user(s)`);
    };

    return (
        <Box className="user-management-container">
            <Typography variant="h4" className="user-management-title">User Management</Typography>

            <Toolbar className="user-toolbar">
                <TextField
                    label="Search by ID, Name or Email"
                    variant="outlined"
                    size="small"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    sx={{ width: '40%' }}
                />

                <Box className="user-filters">
                    <FormControl size="small" sx={{ minWidth: 140 }}>
                        <InputLabel>Role</InputLabel>
                        <Select value={filterRole} label="Role" onChange={e => setFilterRole(e.target.value)}>
                            <MenuItem value="">All</MenuItem>
                            {roles.map(role => <MenuItem key={role} value={role}>{role}</MenuItem>)}
                        </Select>
                    </FormControl>

                    <FormControl size="small" sx={{ minWidth: 140 }}>
                        <InputLabel>Status</InputLabel>
                        <Select value={filterStatus} label="Status" onChange={e => setFilterStatus(e.target.value)}>
                            <MenuItem value="">All</MenuItem>
                            {statuses.map(status => <MenuItem key={status} value={status}>{status}</MenuItem>)}
                        </Select>
                    </FormControl>
                </Box>
            </Toolbar>

            {selectedUsers.length > 0 && (
                <Box className="bulk-action-bar">
                    <Typography>{selectedUsers.length} user(s) selected</Typography>
                    <Button variant="contained" color="error" onClick={bulkDelete}>Delete</Button>
                    <Button variant="contained" onClick={bulkActivate}>Activate</Button>
                    <Button variant="contained" color="warning" onClick={bulkSuspend}>Suspend</Button>
                    <Button variant="contained" color="blue" onClick={bulkBanned}>Banned</Button>
                    <Button variant="outlined" onClick={exportCSV}>Export CSV</Button>
                    <Button variant="outlined" onClick={sendNotification}>Send Notification</Button>
                </Box>
            )}

            <TableContainer component={Paper} className="user-table-container">
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    checked={selectedUsers.length === filteredUsers.length && filteredUsers.length > 0}
                                    indeterminate={selectedUsers.length > 0 && selectedUsers.length < filteredUsers.length}
                                    onChange={toggleSelectAll}
                                />
                            </TableCell>
                            <TableCell>User ID</TableCell>
                            <TableCell>Full Name</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Role</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Registration Date</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredUsers.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={8} align="center">No users found.</TableCell>
                            </TableRow>
                        )}
                        {filteredUsers.map(user => (
                            <TableRow key={user.id} hover>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        checked={selectedUsers.includes(user.id)}
                                        onChange={() => toggleSelectUser(user.id)}
                                    />
                                </TableCell>
                                <TableCell>{user.id}</TableCell>
                                <TableCell>{user.fullName}</TableCell>
                                <TableCell>{user.email}</TableCell>
                                <TableCell>{user.role}</TableCell>
                                <TableCell>{user.status}</TableCell>
                                <TableCell>{format(new Date(user.regDate), 'yyyy-MM-dd')}</TableCell>
                                <TableCell className="user-table-cell-actions">
                                    <Button size="small" variant="outlined" sx={{ mr: 1 }} onClick={() => handleOpenModal(user)}>View</Button>
                                    <Button size="small" variant="outlined" color="primary" sx={{ mr: 1 }}>Edit</Button>
                                    <Button size="small" variant="outlined" color="error">Delete</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

            <Pagination
                count={Math.ceil(filteredUsers.length / itemsPerPage)}
                page={page}
                onChange={(e, value) => setPage(value)}
                sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
            />
            <UserDetailModal
                open={openModal}
                onClose={handleCloseModal}
                user={selectedUser}
            />

        </Box>

    );
};

export default UserListPage;