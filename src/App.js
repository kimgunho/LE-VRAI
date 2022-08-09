import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/global/header';
import Footer from './components/global/footer';
import Home from './pages/home';
import About from './pages/about';
import Intro from './pages/intro';
import List from './pages/list';
import Detail from './pages/detail';
import ScrollTop from './components/global/ScrollTop';

const App = () => {
  const isVisit = sessionStorage.getItem('intro');

  useEffect(() => {
    if (isVisit) {
      return;
    }

    setTimeout(() => {
      sessionStorage.setItem('intro', true);
      location.reload();
    }, 3000);
  }, []);

  return (
    <BrowserRouter>
      {isVisit && <Header />}
      <Routes>
        {isVisit ? (
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
      {isVisit && <Footer />}
      <ScrollTop />
    </BrowserRouter>
  );
};

export default App;
