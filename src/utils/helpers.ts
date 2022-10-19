export const toCapitalize = (string: string) =>
  string ? string.charAt(0).toUpperCase() + string.slice(1).toLowerCase() : '';

export const addZero = (i: number | string) => {
  if (i < 10) {
    i = '0' + i;
  }
  return i;
};
