import React, { useState } from 'react';
import {
    Box, Typography, Accordion, AccordionSummary, AccordionDetails,
    TextField, Button, Snackbar, Alert
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './Style/SupportPage.css';

const faqs = [
    {
        question: 'How do I reset my password?',
        answer: 'Go to your profile settings, click on "Change Password" and follow the instructions.'
    },
    {
        question: 'How do I update my profile information?',
        answer: 'Navigate to Profile > Edit Profile, update the fields, and click Save.'
    },
    {
        question: 'How can I book tickets for an event?',
        answer: 'Go to the Events page, select your event, choose seats, and proceed to checkout.'
    },
];

const SupportPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [snackbarOpen, setSnackbarOpen] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you'd send data to backend (for now, just show success alert)
        console.log('Support Request:', formData);
        setSnackbarOpen(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <Box className="support-page-container">
            <Typography variant="h4" className="support-title">Support & Help Center</Typography>

            <Box className="faq-section">
                <Typography variant="h5" className="section-title">Frequently Asked Questions</Typography>
                {faqs.map((faq, index) => (
                    <Accordion key={index}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography>{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Box>

            <Box component="form" onSubmit={handleSubmit} className="contact-form">
                <Typography variant="h5" className="section-title">Contact Support</Typography>

                <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                />
                <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    fullWidth
                    required
                    margin="normal"
                    multiline
                    rows={4}
                />

                <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
                    Submit Request
                </Button>
            </Box>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={() => setSnackbarOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
            >
                <Alert severity="success" sx={{ width: '100%' }}>
                    Support request submitted successfully!
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default SupportPage;
