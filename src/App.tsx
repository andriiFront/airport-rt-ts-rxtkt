import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation';
import { AirportDetailPage } from './pages/AirportDetailPage';
import { AuthPage } from './pages/AuthPage';
import { MainPage } from './pages/MainPage';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<MainPage/>} />
        <Route path="/auth" element={<AuthPage/>} />
        <Route path="/airport" element={<AirportDetailPage/>} />
      </Routes>
    </>
  );
}

export default App;
