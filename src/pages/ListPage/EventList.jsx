import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Pagination from '@mui/material/Pagination';
import './Style/EventList.css';


const mockEvents = [
    {
        id: 1,
        title: 'Music Concert',
        description: 'An evening filled with live music and entertainment.',
        image: 'https://picsum.photos/id/10/100/100',
        status: 'Live',
        date: '2025-06-10',
        location: 'Mumbai',
        category: 'Music',
    },
    {
        id: 2,
        title: 'Tech Conference',
        description: 'Join us to explore cutting-edge technology trends.',
        image: 'https://picsum.photos/id/20/100/100',
        status: 'Upcoming',
        date: '2025-07-15',
        location: 'Bangalore',
        category: 'Technology',
    },
    {
        id: 3,
        title: 'Art Exhibition',
        description: 'Discover works from local and global artists.',
        image: 'https://picsum.photos/id/30/100/100',
        status: 'Sold Out',
        date: '2025-05-25',
        location: 'Delhi',
        category: 'Art',
    },
];

const EVENTS_PER_PAGE = 15;

const EventList = () => {
  const [events] = useState(mockEvents);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredEvents = events
    .filter(event =>
      event.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (category ? event.category === category : true)
    )
    .sort((a, b) => {
      if (sortBy === 'date') return new Date(a.date) - new Date(b.date);
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });

  const totalPages = Math.ceil(filteredEvents.length / EVENTS_PER_PAGE);

  const pagedEvents = filteredEvents.slice(
    (currentPage - 1) * EVENTS_PER_PAGE,
    currentPage * EVENTS_PER_PAGE
  );

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div className="event-list-container">
      <div className="event-controls">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          className="search-input"
        />
        <select
          onChange={(e) => {
            setCategory(e.target.value);
            setCurrentPage(1);
          }}
          value={category}
          className="dropdown"
        >
          <option value="">All Categories</option>
          <option value="Music">Music</option>
          <option value="Technology">Technology</option>
          <option value="Art">Art</option>
        </select>
        <select
          onChange={(e) => {
            setSortBy(e.target.value);
            setCurrentPage(1);
          }}
          value={sortBy}
          className="dropdown"
        >
          <option value="">Sort By</option>
          <option value="date">Date</option>
          <option value="title">Title</option>
        </select>
      </div>

      {pagedEvents.map((event) => (
        <motion.div
          key={event.id}
          className="event-card"
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="event-image">
            <img
              src={event.image}
              alt={event.title}
              loading="lazy"
              onError={(e) => (e.target.src = 'https://picsum.photos/100')}
            />
          </div>
          <div className="event-content">
            <h3 style={{ color: 'black' }}>{event.title}</h3>
            <p>{event.description}</p>
            <p><strong>Date:</strong> {event.date}</p>
            <p><strong>Location:</strong> {event.location}</p>
            <div className={`badge ${event.status.toLowerCase()}`}>{event.status}</div>
            <button className="event-btn">View Details</button>
          </div>
        </motion.div>
      ))}

      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
          variant="outlined"
        />
      </div>
    </div>
  );
};

export default EventList;