import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Aos from 'aos';
import 'aos/dist/aos.css';
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

  useEffect(() => {
    Aos.init({ duration: 1000, once: true, offset: 100 });
  }, []);

  const filteredEvents = events
    .filter(
      (event) =>
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
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="event-list-title"
      >
        Explore Events
      </motion.h1>

      <motion.div
        className="event-controls"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          style={{width:'56vw'}}
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
      </motion.div>

      <div className="event-card-wrapper">
        {pagedEvents.map((event, index) => (
          <motion.div
            key={event.id}
            className="event-card"
            data-aos={index % 3 === 0 ? 'fade-up' : index % 3 === 1 ? 'fade-right' : 'zoom-in'}
            data-aos-delay={index * 150}
            whileHover={{ scale: 1.03 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="event-image">
              <img
                src={event.image}
                alt={event.title}
                loading="lazy"
                onError={(e) => (e.target.src = 'https://picsum.photos/100')}
              />
            </div>
            <motion.div
              className="event-content"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 style={{ color: '#00FFFF' }}>{event.title}</h3>
              <p>{event.description}</p>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <div className={`badge ${event.status.toLowerCase()}`}>{event.status}</div>
              <button className="event-btn">View Details</button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div
        data-aos="fade-up"
        data-aos-delay="200"
        style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}
      >
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
          variant="outlined"
        />
      </motion.div>
    </div>
  );
};

export default EventList;
