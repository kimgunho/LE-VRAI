import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import S01 from './s01';
import S02 from './s02';
import S03 from './s03';
import S04 from './s04';
import S05 from './s05';
import S06 from './s06';
import S07 from './s07';

const About = () => {
  const [offsetTop, setOffsetTop] = useState(null);
  const { hash } = useLocation();

  useEffect(() => {
    if (hash === '#contact') {
      window.scrollTo(0, offsetTop - 100);
    }
  }, [hash, offsetTop]);

  return (
    <main>
      <S01 />
      <S02 />
      <S03 />
      <S04 />
      <S05 />
      <S06 setOffsetTop={setOffsetTop} />
      <S07 />
    </main>
  );
};

export default About;
