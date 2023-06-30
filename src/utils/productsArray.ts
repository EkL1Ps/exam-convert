export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
};

export interface Currency {
    code: string;
    symbol: string;
    coefficient: number;
  }

const productArray: Product[] = [
    {
        id: 1,
        title: 'iPhone 12',
        description: "This is an iPhone 12 ...",
        price: 750,
    },
    {
        id: 2,
        title: 'iPhone 8',
        description: "This is an iPhone 8 ...",
        price: 850,
    },
    {
        id: 3,
        title: 'iPhone X',
        description: "This is an iPhone X ...",
        price: 1250,
    },
]

export default productArray
