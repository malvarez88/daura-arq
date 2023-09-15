export const thousandSeparator = (number) =>
  Number(number).toLocaleString("en-US");

export const shortDate = (date) => {
  const d = new Date(date);
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
};
