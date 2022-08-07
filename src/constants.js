import blueBalm_unopen from './asset/images/product/blue_balm_unopen.png';
import greenBalm_unopen from './asset/images/product/green_balm_unopen.png';
import redBalm_unopen from './asset/images/product/red_balm_unopen.png';
import pinkBalm_unopen from './asset/images/product/pink_balm_unopen.png';
import blueBalm_open from './asset/images/product/blue_balm_open.png';
import greenBalm_open from './asset/images/product/green_balm_open.png';
import redBalm_open from './asset/images/product/red_balm_open.png';
import pinkBalm_open from './asset/images/product/pink_balm_open.png';

export const productArr = [
  {
    title: 'BLEU',
    desc: '페이스&바디용 비건 보습 멀티밤',
    subDesc: '건조한 피부에 쓱쓱!! 수분가득 촉촉하게 보습케어',
    hash: ['프랑스 이브비건', '저자극 테스트 완료', '보습 테스트 완료'],
    name: '블루',
    openImage: blueBalm_open,
    unOpenImage: blueBalm_unopen,
    link: '/product/detail/BLEU',
  },
  {
    title: 'VERT',
    name: '베르',
    desc: '페이스&바디용 비건 진정 멀티밤',
    subDesc: '자극받은 피부에 쓱쓱!! 부드럽고 편안하게 진정케어',
    hash: ['프랑스 이브비건', '저자극 테스트 완료', '진정 테스트 완료'],
    openImage: greenBalm_open,
    unOpenImage: greenBalm_unopen,
    link: '/product/detail/VERT',
  },
  {
    title: 'ROUGE',
    name: '루즈',
    desc: '립&치크용 비건컬러 멀티밤',
    subDesc: '건조한 입술과 볼에 쓱쓱!! 촉촉하고 은은하게 생기케어',
    hash: ['프랑스 이브비건', '저자극 테스트 완료', '선명한 발색 (천연 레드 색소)'],
    openImage: redBalm_open,
    unOpenImage: redBalm_unopen,
    link: '/product/detail/ROUGE',
  },
  {
    title: 'ROSE',
    name: '로즈',
    desc: '립&치크용 비건컬러 멀티밤',
    subDesc: '건조한 입술과 볼에 은은한 생기 케어',
    hash: ['프랑스 이브비건', '저자극 테스트 완료', '선명한 발색 (천연 핑크 색소)'],
    openImage: pinkBalm_open,
    unOpenImage: pinkBalm_unopen,
    link: '/product/detail/ROSE',
  },
];
