import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Home from './pages/home';
import Intro from './pages/intro';

const App = () => {
  const isWelcome = sessionStorage.getItem('intro');

  useEffect(() => {
    !isWelcome &&
      setTimeout(() => {
        sessionStorage.setItem('intro', true);
        location.reload();
      }, 3000);
  }, []);

  return (
    <BrowserRouter>
      <Routes>{isWelcome ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Intro />} />}</Routes>
    </BrowserRouter>
  );
};
export default App;
