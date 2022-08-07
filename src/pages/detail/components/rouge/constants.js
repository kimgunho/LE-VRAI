import point1ImgSrc from '../../../../asset/images/detail/rouge/rouge_point_img01.png';
import point2ImgSrc from '../../../../asset/images/detail/rouge/rouge_point_img02.png';
import point3ImgSrc from '../../../../asset/images/detail/rouge/rouge_point_img03.png';
import point4ImgSrc from '../../../../asset/images/detail/rouge/rouge_point_img04.png';
import point5ImgSrc from '../../../../asset/images/detail/rouge/rouge_point_img05.png';
import point6ImgSrc from '../../../../asset/images/detail/rouge/rouge_point_img06.png';
import point2BannerImg from '../../../../asset/images/detail/rouge/point2_img.jpg';
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
    title: 'CALENDULA OFFICINALIS FLOWER',
    desc: '피부결 개선에 도움을 줄 수 있으며 건조한 피부를 부드럽게 케어해줍니다. ',
  },
  {
    image: point2ImgSrc,
    title: 'SWEET ALMOND OIL',
    desc: '스위트 아몬드 오일은 고보습의 효과를 지닌 동시에 피부 자극이 적어 부드럽게 케어해줍니다.    ',
  },
  {
    image: point3ImgSrc,
    title: 'AVOCADO OIL',
    desc: '피부 보습과 유연효과가 뛰어나 피부를 건강하게 가꿔줍니다.',
  },
  {
    image: point4ImgSrc,
    title: 'COCOnut oil',
    desc: '코코넛 오일에 함유된 라우르산과 카프릴산 성분이 피부를 건강하게 케어해줍니다. ',
  },
  {
    image: point5ImgSrc,
    title: 'BRAZILNUT SEED OIL',
    desc: '비타민E, 셀레늄과 오메가3 등의 성분이 함유되어 있어 피부를 건강하게 가꿔줍니다.',
  },
  {
    image: point6ImgSrc,
    title: 'PASSION FRUIT SEED OIL',
    desc: '피부 보습에 탁월하며 흡수력이 좋아 사용감이 좋은 오일로 유연한 케어가 가능합니다.',
  },
];
