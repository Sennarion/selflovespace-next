import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './shared-layout/shared-layout';
import Home from 'pages/home/home';
import About from 'pages/about/about';
import Services from 'pages/services/services';
import Popup from './popup/popup';
import { checkCookies } from 'utils/cookies';

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(checkCookies());

  return (
    <>
      {isPopupOpen && <Popup setIsPopupOpen={setIsPopupOpen} />}
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
