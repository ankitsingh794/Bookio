import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import StardustCanvas from './components/Stardust';
import AppRoutes from './routes';

const App = () => {
  return (
    <Router>
    <StardustCanvas />
      <AppRoutes />
    </Router>
  );
};

export default App;
