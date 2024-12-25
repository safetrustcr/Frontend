export const shortAddress = (address: string) => {
  return `${address.slice(0, 3)}...${address.slice(-4)}`;
};
