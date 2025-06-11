import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    TextField, Pagination, Button, Dialog, DialogTitle, DialogContent, DialogActions, Chip
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import './Style/Message.css';

const feedbacks = [
    { id: 1, user: 'Olivia Ryhe', email: 'olivia@email.com', feedback: 'Loved the event management! Everything was smooth and organized. Great job team!', date: '2025-05-10' },
    { id: 2, user: 'Steve Hampton', email: 'steve.hamp@email.com', feedback: 'The ticket booking was easy, but faced a small issue with payment gateway. Please improve it.', date: '2025-05-09' },
    { id: 3, user: 'Sophia Turner', email: 'sophia.t@email.com', feedback: 'Amazing user interface. The animations and responsiveness are next level!', date: '2025-05-08' },
    { id: 4, user: 'Michael Brooks', email: 'michael.b@email.com', feedback: 'Could not find parking info easily. Please add more details regarding venue logistics.', date: '2025-05-07' },
    { id: 5, user: 'Emma Watson', email: 'emma.watson@email.com', feedback: 'Everything was perfect! The notifications and reminders helped a lot.', date: '2025-05-06' },
    { id: 6, user: 'John Doe', email: 'john.doe@email.com', feedback: 'Faced issues while rescheduling tickets. Support team was helpful though.', date: '2025-05-05' },
    { id: 7, user: 'Alice Johnson', email: 'alice.j@email.com', feedback: 'The mobile experience was very smooth. Loved the responsiveness and clean design.', date: '2025-05-04' },
    { id: 8, user: 'Robert Miles', email: 'robert.m@email.com', feedback: 'Please add more payment options. UPI and wallet support is a must these days.', date: '2025-05-03' },
    { id: 9, user: 'David Smith', email: 'david.smith@email.com', feedback: 'The seating layout was a bit confusing. Maybe add a preview during booking?', date: '2025-05-02' },
    { id: 10, user: 'Mia Collins', email: 'mia.collins@email.com', feedback: 'Loved the quick customer support response. Very professional!', date: '2025-05-01' }
];

const getSentiment = (text) => {
    const positiveWords = ['loved', 'great', 'amazing', 'perfect', 'smooth', 'professional', 'helpful'];
    const negativeWords = ['issue', 'problem', 'confusing', 'could not', 'faced', 'improve'];

    const lowerText = text.toLowerCase();

    if (positiveWords.some(word => lowerText.includes(word))) return { label: 'Positive', color: 'success' };
    if (negativeWords.some(word => lowerText.includes(word))) return { label: 'Negative', color: 'error' };

    return { label: 'Neutral', color: 'warning' };
};

const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 }
};

const Messages = () => {
    const [feedbacksData, setFeedbacksData] = useState(feedbacks);
    const [searchQuery, setSearchQuery] = useState('');
    const [page, setPage] = useState(1);
    const [selectedFeedback, setSelectedFeedback] = useState(null);
    const [replyingTo, setReplyingTo] = useState(null);
    const [replyText, setReplyText] = useState('');
    const [deleteConfirm, setDeleteConfirm] = useState(null);

    const itemsPerPage = 10;

    const filteredFeedbacks = feedbacksData.filter(fb =>
        fb.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fb.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        fb.feedback.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const paginatedFeedbacks = filteredFeedbacks.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    const handleClose = () => setSelectedFeedback(null);

    const handleDelete = () => {
        setFeedbacksData(prev => prev.filter(fb => fb.id !== deleteConfirm.id));
        setDeleteConfirm(null);
        if (selectedFeedback?.id === deleteConfirm.id) setSelectedFeedback(null);
    };

    const handleReplySend = () => {
        console.log(`Reply sent to ${replyingTo.email}: ${replyText}`);
        setReplyText('');
        setReplyingTo(null);
    };

    return (
        <div className="messages-container">
            <div className="messages-header">
                <h1>User Feedbacks</h1>
                <TextField
                    variant="outlined"
                    size="small"
                    placeholder="Search Feedbacks"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    fullWidth={window.matchMedia("(max-width: 600px)").matches}
                />
            </div>

            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>User</TableCell>
                            <TableCell>Email</TableCell>
                            <TableCell>Feedback</TableCell>
                            <TableCell className="sentiment-col">Sentiment</TableCell>
                            <TableCell className="date-col">Date</TableCell>
                            <TableCell className="actions-col">Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {paginatedFeedbacks.map(fb => {
                            const sentiment = getSentiment(fb.feedback);
                            return (
                                <TableRow key={fb.id} hover style={{ cursor: 'pointer' }}>
                                    <TableCell>{fb.user}</TableCell>
                                    <TableCell>{fb.email}</TableCell>
                                    <TableCell>{fb.feedback.slice(0, 50)}...</TableCell>
                                    <TableCell className="sentiment-col">
                                        <Chip label={sentiment.label} color={sentiment.color} size="small" variant="outlined" />
                                    </TableCell>
                                    <TableCell className="date-col">{fb.date}</TableCell>
                                    <TableCell className="actions-col">
                                        <Button size="small" variant="outlined" onClick={() => setSelectedFeedback(fb)}>
                                            View
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <Pagination
                count={Math.ceil(filteredFeedbacks.length / itemsPerPage)}
                page={page}
                onChange={(e, value) => setPage(value)}
                sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}
            />

            {/* Feedback Details Modal with animation */}
            <AnimatePresence>
                {selectedFeedback && (
                    <Dialog
                        open={Boolean(selectedFeedback)}
                        onClose={handleClose}
                        maxWidth="sm"
                        fullWidth
                        // disable MUI backdrop transition to avoid conflict with framer motion animation
                        TransitionProps={{ appear: true, timeout: 0 }}
                    >
                        {/* Wrap dialog content in motion.div for animation */}
                        <motion.div
                            variants={modalVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ duration: 0.3 }}
                            style={{ originX: 0.5, originY: 0.5 }}
                        >
                            <DialogTitle>Feedback Details</DialogTitle>
                            <DialogContent dividers className="dialog-content-scroll">
                                <p><strong>User:</strong> {selectedFeedback.user}</p>
                                <p><strong>Email:</strong> {selectedFeedback.email}</p>
                                <p><strong>Date:</strong> {selectedFeedback.date}</p>
                                <p><strong>Feedback:</strong></p>
                                <p>{selectedFeedback.feedback}</p>
                            </DialogContent>
                            <DialogActions>
                                <Button size="small" variant="outlined" onClick={handleClose}>Close</Button>
                                <Button size="small" variant="contained" sx={{ ml: 1 }} onClick={() => setReplyingTo(selectedFeedback)}>Reply</Button>
                                <Button size="small" color="error" sx={{ ml: 1 }} onClick={() => setDeleteConfirm(selectedFeedback)}>Delete</Button>
                            </DialogActions>
                        </motion.div>
                    </Dialog>
                )}
            </AnimatePresence>

            {/* Reply Modal */}
            <Dialog open={Boolean(replyingTo)} onClose={() => setReplyingTo(null)} maxWidth="sm" fullWidth>
                <DialogTitle>Reply to {replyingTo?.user}</DialogTitle>
                <DialogContent dividers>
                    <TextField
                        label="Your Reply"
                        multiline
                        rows={4}
                        fullWidth
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setReplyingTo(null)}>Cancel</Button>
                    <Button
                        variant="contained"
                        disabled={!replyText.trim()}
                        onClick={handleReplySend}
                    >
                        Send Reply
                    </Button>
                </DialogActions>
            </Dialog>

            {/* Delete Confirmation Modal */}
            <Dialog open={Boolean(deleteConfirm)} onClose={() => setDeleteConfirm(null)} maxWidth="xs" fullWidth>
                <DialogTitle>Confirm Delete</DialogTitle>
                <DialogContent dividers>
                    Are you sure you want to delete feedback from <strong>{deleteConfirm?.user}</strong>?
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setDeleteConfirm(null)}>Cancel</Button>
                    <Button variant="contained" color="error" onClick={handleDelete}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default Messages;