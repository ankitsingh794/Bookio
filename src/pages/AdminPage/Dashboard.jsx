import React from 'react';
import Sidebar from './Sidebar';
import OrdersTable from './OrderTable';
import './Style/Dashboard.css';
import { Box } from '@mui/material';
import Task from './Task';
import Messages from './Message';
import UserListPage from './UserListPage';
import SupportPage from './SupportPage';
import SettingsPage from './SettingsPage';

const mockOrders = [
  { invoice: 'INV-1234', date: 'Feb 3, 2023', status: 'Refunded', customer: 'Olivia Ryhe', email: 'olivia@email.com', category: 'Concert' },
  { invoice: 'INV-1233', date: 'Feb 3, 2023', status: 'Paid', customer: 'Steve Hampton', email: 'steve.hamp@email.com', category: 'Workshop' },
  { invoice: 'INV-1232', date: 'Feb 2, 2023', status: 'Cancelled', customer: 'Ethan Wright', email: 'ethan.wright@email.com', category: 'Concert' },
  { invoice: 'INV-1231', date: 'Feb 1, 2023', status: 'Paid', customer: 'Sophia Turner', email: 'sophia.turner@email.com', category: 'Workshop' },
  { invoice: 'INV-1230', date: 'Jan 31, 2023', status: 'Paid', customer: 'Liam Johnson', email: 'liam.johnson@email.com', category: 'Concert' },
  { invoice: 'INV-1229', date: 'Jan 30, 2023', status: 'Refunded', customer: 'Ava Martinez', email: 'ava.martinez@email.com', category: 'Workshop' },
  { invoice: 'INV-1228', date: 'Jan 29, 2023', status: 'Paid', customer: 'Noah Smith', email: 'noah.smith@email.com', category: 'Concert' },
  { invoice: 'INV-1227', date: 'Jan 28, 2023', status: 'Cancelled', customer: 'Emma Davis', email: 'emma.davis@email.com', category: 'Workshop' },
  { invoice: 'INV-1226', date: 'Jan 27, 2023', status: 'Paid', customer: 'Oliver Brown', email: 'oliver.brown@email.com', category: 'Concert' },
  { invoice: 'INV-1225', date: 'Jan 26, 2023', status: 'Refunded', customer: 'Mia Wilson', email: 'mia.wilson@email.com', category: 'Workshop' },
  { invoice: 'INV-1224', date: 'Jan 25, 2023', status: 'Paid', customer: 'William Moore', email: 'william.moore@email.com', category: 'Concert' },
  { invoice: 'INV-1223', date: 'Jan 24, 2023', status: 'Paid', customer: 'Isabella Taylor', email: 'isabella.taylor@email.com', category: 'Workshop' },
  { invoice: 'INV-1222', date: 'Jan 23, 2023', status: 'Cancelled', customer: 'James Anderson', email: 'james.anderson@email.com', category: 'Concert' },
  { invoice: 'INV-1221', date: 'Jan 22, 2023', status: 'Paid', customer: 'Charlotte King', email: 'charlotte.king@email.com', category: 'Workshop' },
  { invoice: 'INV-1220', date: 'Jan 21, 2023', status: 'Refunded', customer: 'Benjamin Scott', email: 'benjamin.scott@email.com', category: 'Concert' },
  { invoice: 'INV-1219', date: 'Jan 20, 2023', status: 'Paid', customer: 'Amelia Adams', email: 'amelia.adams@email.com', category: 'Workshop' },
  { invoice: 'INV-1218', date: 'Jan 19, 2023', status: 'Cancelled', customer: 'Lucas Baker', email: 'lucas.baker@email.com', category: 'Concert' },
  { invoice: 'INV-1217', date: 'Jan 18, 2023', status: 'Paid', customer: 'Harper Evans', email: 'harper.evans@email.com', category: 'Workshop' },
  { invoice: 'INV-1216', date: 'Jan 17, 2023', status: 'Refunded', customer: 'Henry Bell', email: 'henry.bell@email.com', category: 'Concert' },
  { invoice: 'INV-1215', date: 'Jan 16, 2023', status: 'Paid', customer: 'Evelyn Cook', email: 'evelyn.cook@email.com', category: 'Workshop' },
  { invoice: 'INV-1214', date: 'Jan 15, 2023', status: 'Paid', customer: 'Alexander Reed', email: 'alex.reed@email.com', category: 'Concert' },
  { invoice: 'INV-1213', date: 'Jan 14, 2023', status: 'Cancelled', customer: 'Abigail Murphy', email: 'abigail.murphy@email.com', category: 'Workshop' },
  { invoice: 'INV-1212', date: 'Jan 13, 2023', status: 'Paid', customer: 'Jack Rivera', email: 'jack.rivera@email.com', category: 'Concert' },
  { invoice: 'INV-1211', date: 'Jan 12, 2023', status: 'Refunded', customer: 'Emily Cooper', email: 'emily.cooper@email.com', category: 'Workshop' },
  { invoice: 'INV-1210', date: 'Jan 11, 2023', status: 'Paid', customer: 'Daniel Ward', email: 'daniel.ward@email.com', category: 'Concert' },
  { invoice: 'INV-1209', date: 'Jan 10, 2023', status: 'Paid', customer: 'Scarlett Torres', email: 'scarlett.torres@email.com', category: 'Workshop' },
  { invoice: 'INV-1208', date: 'Jan 9, 2023', status: 'Cancelled', customer: 'Michael Perry', email: 'michael.perry@email.com', category: 'Concert' },
  { invoice: 'INV-1207', date: 'Jan 8, 2023', status: 'Paid', customer: 'Grace Barnes', email: 'grace.barnes@email.com', category: 'Workshop' },
  { invoice: 'INV-1206', date: 'Jan 7, 2023', status: 'Refunded', customer: 'Elijah Powell', email: 'elijah.powell@email.com', category: 'Concert' }
];


export const Setting = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, ml: '0' }} className="main-content">
        {/* <OrdersTable orders={mockOrders} />  */}
             {/* <Task/> */}
            {/* <Messages/> */}
            {/* <UserListPage/> */}
            {/* <SupportPage/> */}
            <SettingsPage/>
      </Box>
    </Box>
  );
};


export const Support = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, ml: '0' }} className="main-content">
        {/* <OrdersTable orders={mockOrders} />  */}
             {/* <Task/> */}
            {/* <Messages/> */}
            {/* <UserListPage/> */}
            <SupportPage/>
            {/* <SettingsPage/> */}
      </Box>
    </Box>
  );
};


export const UserList = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, ml: '0' }} className="main-content">
        {/* <OrdersTable orders={mockOrders} />  */}
             {/* <Task/> */}
            {/* <Messages/> */}
            <UserListPage/>
            {/* <SupportPage/> */}
            {/* <SettingsPage/> */}
      </Box>
    </Box>
  );
};


export const Feedback = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, ml: '0' }} className="main-content">
        {/* <OrdersTable orders={mockOrders} />  */}
             {/* <Task/> */}
            <Messages/>
            {/* <UserListPage/> */}
            {/* <SupportPage/> */}
            {/* <SettingsPage/> */}
      </Box>
    </Box>
  );
};


export const Tasks = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, ml: '0' }} className="main-content">
        {/* <OrdersTable orders={mockOrders} />  */}
             <Task/>
            {/* <Messages/> */}
            {/* <UserListPage/> */}
            {/* <SupportPage/> */}
            {/* <SettingsPage/> */}
      </Box>
    </Box>
  );
};

export const OrderDetails = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box sx={{ flexGrow: 1, ml: '0' }} className="main-content">
        <OrdersTable orders={mockOrders} /> 
             {/* <Task/> */}
            {/* <Messages/> */}
            {/* <UserListPage/> */}
            {/* <SupportPage/> */}
            {/* <SettingsPage/> */}
      </Box>
    </Box>
  );
};