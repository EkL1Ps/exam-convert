import "./ProductListItem.scss";
import { Currency, Product } from "../utils/productsArray";

interface ProductListItemProps {
  product: Product;
  currency: string;
  currencies: Currency[];
  onBuy: (price: number) => void;
}

const ProductListItem: React.FC<ProductListItemProps> = ({
  product,
  currency,
  currencies,
  onBuy,
}) => {
  const getPriceWithCurrency = (): string => {
    const selectedCurrency = currencies.find((curr) => curr.code === currency);
    if (selectedCurrency) {
      const totalPrice = product.price * selectedCurrency.coefficient;
      return `${selectedCurrency.symbol}${totalPrice}`;
    }
    return `$${product.price}`;
  };

  const handleBuyClick = () => {
    const selectedCurrency = currencies.find((curr) => curr.code === currency);
    if (selectedCurrency) {
      const totalPrice = product.price * selectedCurrency.coefficient;
      onBuy(totalPrice);
    } else {
      onBuy(product.price);
    }
  };

  return (
    <>
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">{product.title}</h2>
          <div>{product.description}</div>
          <div>{getPriceWithCurrency()}</div>
          <button onClick={handleBuyClick}>Buy</button>
        </div>
      </div>
    </>
  );
};
export default ProductListItem;
