import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import Header from './components/global/header';
import Footer from './components/global/footer';
import Home from './pages/home';
import About from './pages/about';
import Intro from './pages/intro';
import List from './pages/list';
import Detail from './pages/detail';
import ScrollTop from './components/global/scrollTop';

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
      <Routes>
        {isWelcome ? (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<List />} />
            <Route path="/product/detail/:title" element={<Detail />} />
          </>
        ) : (
          <Route path="*" element={<Intro />} />
        )}
      </Routes>
      {isWelcome && <Footer />}
      <ScrollTop />
    </BrowserRouter>
  );
};
export default App;
