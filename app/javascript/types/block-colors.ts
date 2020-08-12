interface IBlockColors {
  products: string;
  prices: string;
  market: string;
  pending: string;
  [key: string]: string;
}

const BlockColors: IBlockColors = {
  products: 'limegreen',
  prices: 'lime',
  market: 'yellowgreen',
  pending: 'red'
};

export default BlockColors;
