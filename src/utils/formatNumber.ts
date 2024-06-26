const formatNumber = (number: number): string => {
  return new Intl.NumberFormat('ko-KR').format(number);
};
export default formatNumber;
