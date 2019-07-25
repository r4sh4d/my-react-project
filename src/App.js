import React from 'react';

import Header from './components/headerComponent/header';
import SearchSection from './components/searchSection/searchSection';
import JobSection from './components/jobSection/jobSection';

import './Assets/css/header.min.css';
import './Assets/css/searchSection.min.css';
import './Assets/css/jobSection.min.css';


function App() {
  return (
    <div className="App">
      <Header />
      <SearchSection />
      <JobSection />
    </div>
  );
}

export default App;
