import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import S01 from './s01';
import S02 from './s02';
import S03 from './s03';
import S04 from './s04';
import S05 from './s05';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  return (
    <main>
      <S01 />
      <S02 />
      <S03 />
      <S04 />
      <S05 />
    </main>
  );
};

export default Home;
