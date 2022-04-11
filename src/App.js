import './App.css';
import { Routes, Route } from 'react-router-dom';

import Events from './components/Events/events.component';
import Timeline from './components/Timeline/timeline.component';
import Hero from './components/Hero/hero.component';
import Navbar from './components/Navbar/navbar.component';
import Sponsors from './components/Sponsors/sponsors.component';
import Team from './components/Team/team.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Events />
              <Timeline />
              <Team />
              <Sponsors />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
