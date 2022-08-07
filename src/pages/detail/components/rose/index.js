import classNames from 'classnames/bind';
import { BsCheck2Circle } from 'react-icons/bs';

import { productArr } from '../../../../constants';
import { point1Arr, getOtherImages, veganArr } from './constants';
import styles from './index.module.scss';

const cx = classNames.bind(styles);

const ROSE = () => {
  const { point2BannerImg, veganLogo } = getOtherImages();

  return (
    <div className={cx('wrapper')}>
      <div className={cx('paddingBox')}>
        <p className={cx('mainDesc')}>
          엄마와 아이의 행복한 시간을 채워주는
          <br />
          <span>프리미엄 비건 키즈 코스메틱 르브레</span>
        </p>

        <ul className={cx('list')}>
          <li>
            <p className={cx('count')}>01</p>
            <p className={cx('title')}>
              SAFE
              <br />
              CARE
            </p>
            <p className={cx('desc')}>안심하고 케어해주세요!</p>
          </li>
          <li>
            <p className={cx('count')}>02</p>
            <p className={cx('title')}>
              SIMPLE
              <br />
              &amp; COLORFUL
            </p>
            <p className={cx('desc')}>쉽고 재밌게 르브레와 함께해주세요.</p>
          </li>
        </ul>

        <p className={cx('point')}>POINT 01</p>
        <p className={cx('title')}>
          CLEAN &amp;
          <br />
          NATURAL TREATMENT
        </p>
        <p className={cx('desc')}>
          깨끗한 자연에서 온 자연유래 식물성 원료(카렌듈라, 코코넛오일, 패션프룻씨오일, 스위트아몬드 오일 등)의 유효성분이 보다 촉촉한 컬러
          케어에 도움을 줍니다.
        </p>

        <ul className={cx('pointArr')}>
          {point1Arr.map((item) => (
            <li key={item.title}>
              <img className={cx('image')} src={item.image} alt={item.title} />
              <div className={cx('info')}>
                <p className={cx('title')}>{item.title}</p>
                <p className={cx('desc')}>{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className={cx('checkDesc')}>
          <span className={cx('icon')}>
            <BsCheck2Circle />
          </span>
          원료적 특성에 한함
        </p>

        <p className={cx('point')}>POINT 02</p>
        <p className={cx('title')}>
          HYPOALLERGENIC
          <br />+ HIGH FUNCTION
        </p>
        <p className={cx('desc')}>아이, 엄마아빠 모두가 걱정없이 믿고 쓸 수 있도록 저자극 테스트를 완료한 멀티밤입니다.</p>
        <div className={cx('bannerBox')}>
          <img src={point2BannerImg} alt="" />
          <div className={cx('info')}>
            <p className={cx('title')}>HERB FRAGRANCE</p>
            <p className={cx('desc')}>
              생기있는 컬러와 함께 LAVENDER, EUCALYPTUS, ROSEMARY 로 구성된 은은하고 상쾌한 숲속 분위기의 향까지 함께 느낄 수 있습니다.
            </p>
          </div>
        </div>

        <p className={cx('point')}>POINT 03</p>
        <p className={cx('title')}>FRANCE EVE VEGAN</p>
        <p className={cx('desc')}>르브레 멀티밤 라인 전 제품은 프랑스 이브 비건(EVE VEGAN)으로부터 인증을 획득한 100% 비건 제품입니다.</p>
        <div className={cx('veganBox')}>
          <ul className={cx('veganCampaign')}>
            {veganArr.map((item) => (
              <li key={item.title}>
                <img src={item.icon} alt={`비동물성 ${item.title}`} />
                <p className={cx('desc')}>
                  비동물성
                  <br />
                  {item.title}
                </p>
              </li>
            ))}
          </ul>

          <p className={cx('desc')}>
            EVE (Expertise Vegane Europe)는 프랑스 비건협회 (Vegan France Interpro)가 설립한 권위있는 국제 비건 인증 기관으로, 제품 뿐만
            아니라 해당 제품을 제조하는 제조 현장까지 철저한 검증을 진행하고 있습니다. EVE VEGAN 인증은 생명 존중의 가치를 지키기 위해
            동물성 원료를 베제하고 비동물성 원료 패키지를 적용한 제품에 부여됩니다.
          </p>
          <p className={cx('desc')}>
            르브레 멀티밤 제품은 원료부터 생산과정, 패키지까지 까다롭고 엄격하게 심사하는{' '}
            <span className={cx('colorPoint')}>EVE VEGAN</span>의 인증 절차를 정식으로 통과하였습니다.
          </p>

          <img className={cx('logo')} src={veganLogo} alt="eve vegan" />
        </div>

        <p className={cx('point')}>POINT 04</p>
        <p className={cx('title')}>
          TRENDY DESIGN
          <br />
          &amp; COLORS
        </p>
        <p className={cx('desc')}>
          프랑스 감성의 감각적이고 미니멀한 디자인에 청량한 블루 컬러를 입혀 아이들의 감성과 상상력을 채워줍니다. 아이들의 손에도 쏘옥
          들어오는 편안한 그립감이 자기 주도성을 높여주며, 비비드한 컬러는 예술적 감각과 창의력을 키워줍니다.
        </p>
      </div>
      <div className={cx('point4Box')}>
        <div className={cx('background')} />
        <ul className={cx('info')}>
          <li>
            <p className={cx('title')}>TEXTURE</p>
            <p className={cx(['desc', 'large'])}>피부 및 입술에 부드럽게 밀착되어 끈적임 없이 글로우한 광채와 촉촉함을 선사합니다.</p>
          </li>
          <li>
            <p className={cx('title')}>INGREDIENT</p>
            <p className={cx(['desc', 'small'])}>
              트라이에틸헥사노인, 다이아이소스테아릴말레이트, 옥틸도데칸올, 카프릴릭/카프릭트라이글리세라이드, 파라핀,
              실리카다이메틸실릴레이트, 다이부틸라우로일글루타마이드, 마이크로크리스탈린왁스, 다이부틸에틸헥사노일글루타마이드,
              폴리글리세릴-2트라이아이소스테아레이트, 솔비탄아이소스테아레이트, 1,2-헥산다이올, 티타늄디옥사이드, 향료, 황색5호,
              적색104호의(1), 적색202호, 리날룰, 스위트아몬드오일, 패션프룻씨오일, 바오밥나무씨오일, 코코넛야자오일, 브라질넛씨오일,
              아보카도오일, 해바라기씨오일, 리모넨, 포트마리골드꽃, 토코페롤
            </p>
          </li>
        </ul>
      </div>
      <div className={cx('point5Background')} />
      <div className={cx('paddingBox')}>
        <p className={cx('title')}>LE VRAI MULTIBALM</p>
        <ul className={cx('productArr')}>
          {productArr.map((product) => (
            <li key={product.title}>
              <div className={cx('background')}>
                <img src={product.unOpenImage} alt={product.title} />
              </div>
              <div className={cx('info')}>
                <p className={cx(['name', product.title])}>
                  {product.name} <span className={cx('title')}>{product.title}</span>
                </p>
                <p className={cx('desc')}>{product.desc}</p>
                <p className={cx('subDesc')}>{product.subDesc}</p>
                <p className={cx('hash')}>
                  {product.hash.map((hash) => (
                    <span key={hash}>#{hash}</span>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className={cx('productInfo')}>
          <p className={cx('title')}>제품상세정보</p>
          <ul className={cx('info')}>
            <li>
              <span className={cx('title')}>제품명 및 용량</span>
              <span className={cx('desc')}>르브레 코코 컬러 멀티밤 로즈(6.7g)</span>
            </li>
            <li>
              <span className={cx('title')}>사용기한</span>
              <span className={cx('desc')}>사용기한 제품 별도 표기</span>
            </li>
            <li>
              <span className={cx('title')}>권장연령</span>
              <span className={cx('desc')}>모든 연령 사용 가능</span>
            </li>
            <li>
              <span className={cx('title')}>제품 주요 사양</span>
              <span className={cx('desc')}>모든 피부타입</span>
            </li>
            <li>
              <span className={cx('title')}>제조업자 및 책임판매업자</span>
              <span className={cx('desc')}>씨엔씨인터내셔널, 더진리</span>
            </li>
            <li>
              <span className={cx('title')}>제조국</span>
              <span className={cx('desc')}>한국</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ROSE;
