export const getPageH1Title = (pathname) => {
  if (pathname === '/about') {
    return 'LE VRAI 소개';
  }
  if (pathname === '/product') {
    return 'LE VRAI 제품';
  }
  return 'LE VRAI';
};
