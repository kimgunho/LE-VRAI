import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/global/header';
import Footer from './components/global/footer';
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
      {isWelcome && <Header />}
      <Routes>{isWelcome ? <Route path="/" element={<Home />} /> : <Route path="/" element={<Intro />} />}</Routes>
      {isWelcome && <Footer />}
    </BrowserRouter>
  );
};
export default App;
