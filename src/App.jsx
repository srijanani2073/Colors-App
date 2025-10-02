import React, { useState } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import LearnColors from './components/LearnColors';
import FillColors from './components/FillColors';
import MixColors from './components/MixColors';
import './styles.css';

const App = () => {
  const [activeActivity, setActiveActivity] = useState('learn');

  const renderActivity = () => {
    switch (activeActivity) {
      case 'learn': return <LearnColors />;
      case 'fill': return <FillColors />;
      case 'mix': return <MixColors />;
      default: return <LearnColors />;
    }
  };

  return (
    <div className="app">
      <Header />
      <Menu onSelectActivity={setActiveActivity} activeActivity={activeActivity} />
      <main className="content">
        {renderActivity()}
      </main>
    </div>
  );
};

export default App;
