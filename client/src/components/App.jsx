import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Cafe from './Cafe';
import Employee from './Employee';


const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" component={Cafe} />
          <Route path="/employees/:cafeId" component={Employee} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
