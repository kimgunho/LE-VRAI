import point1ImgSrc from '../../../../asset/images/detail/vert/vert_point_img01.png';
import point2ImgSrc from '../../../../asset/images/detail/vert/vert_point_img02.png';
import point3ImgSrc from '../../../../asset/images/detail/vert/vert_point_img03.png';
import point4ImgSrc from '../../../../asset/images/detail/vert/vert_point_img04.png';
import point5ImgSrc from '../../../../asset/images/detail/vert/vert_point_img05.png';
import point6ImgSrc from '../../../../asset/images/detail/vert/vert_point_img06.png';
import point7ImgSrc from '../../../../asset/images/detail/vert/vert_point_img07.png';
import point2BannerImg from '../../../../asset/images/detail/bleu/point2_img.jpg';
import point3VeganImg01 from '../../../../asset/images/detail/bleu/point3_vegan_img01.png';
import point3VeganImg02 from '../../../../asset/images/detail/bleu/point3_vegan_img02.png';
import point3VeganImg03 from '../../../../asset/images/detail/bleu/point3_vegan_img03.png';
import veganLogo from '../../../../asset/images/detail/bleu/eve_vegan_logo.png';

export const veganArr = [
  {
    icon: point3VeganImg01,
    title: '원료사용',
  },
  {
    icon: point3VeganImg02,
    title: '원료 패키지',
  },
  {
    icon: point3VeganImg03,
    title: '실험제조 과정',
  },
];

export const getOtherImages = () => {
  return { point2BannerImg, veganLogo };
};

export const point1Arr = [
  {
    image: point1ImgSrc,
    title: 'CAMELLIA SINENSIS LEAF EXTRACT',
    desc: '고농도 녹차 추출물은 진정효과, 수렴작용이 뛰어나 건강한 피부를 만들어 줍니다.',
  },
  {
    image: point2ImgSrc,
    title: 'LAVENDER OIL',
    desc: '라벤더 오일은 끈적임이 적은 오일로 무엇보다 피부를 진정시키는 데 도움을 줍니다.   ',
  },
  {
    image: point3ImgSrc,
    title: 'CENTELLA ASIATICA EXTRACT',
    desc: '병풀추출물은 피부 보습과 보호에 함께 도움을 줍니다. ',
  },
  {
    image: point4ImgSrc,
    title: 'shea butter',
    desc: '자연에서 온 시어버터는 보습제 역할을 해주고 수분막을 형성시켜줍니다. ',
  },
  {
    image: point5ImgSrc,
    title: 'AVOCADO OIL',
    desc: '피부 보습과 유연효과가 뛰어나 피부를 건강하게 가꿔줍니다. ',
  },
  {
    image: point6ImgSrc,
    title: 'COCONUT OIL',
    desc: '코코넛 오일에 함유된 라우르산과 카프릴산 성분이 피부를 건강하게 케어해줍니다.  ',
  },
  {
    image: point7ImgSrc,
    title: 'SWEET ALMOND OIL',
    desc: '스위트 아몬드 오일은 고보습의 효과를 지닌 동시에 피부 자극이 적어 부드럽게 케어해줍니다.  ',
  },
];
