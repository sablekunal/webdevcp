import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

import LiveTournament from './pages/LiveTournament';
import CreateTournament from './pages/CreateTournament';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<CreateTournament />} />
          <Route path="tournament" element={<LiveTournament />} />
          <Route path="t/:id" element={<LiveTournament />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
