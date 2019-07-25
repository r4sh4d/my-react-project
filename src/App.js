import React from 'react';

import Header from './components/headerComponent/header';
import SearchSection from './components/searchSection/searchSection';
import JobSection from './components/jobSection/jobSection';

import './Assets/scss/header.scss';
import './Assets/scss/searchSection.scss';
import './Assets/scss/jobSection.scss';


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
