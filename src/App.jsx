import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import StatsPage from './pages/StatsPage';
import { EventProvider } from './context/EventContext';

function App() {
  return (
    <EventProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stats" element={<StatsPage />} />
        </Routes>
      </BrowserRouter>
    </EventProvider>
  )
}

export default App
