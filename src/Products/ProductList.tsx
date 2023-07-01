import ProductListItem from "./ProductListItem";
import productArray from "../utils/productsArray";
import "./ProductList.scss";
import { Currency } from "../utils/productsArray";

interface ProductListProps {
  currency: string;
  currencies: Currency[];
  onBuy: (price: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({
  currency,
  currencies,
  onBuy,
}) => {
  return (
    <>
      <div className="product-container">
        <div className="row">
          {productArray.map((product) => (
            <div className="col-3">
              <ProductListItem
                key={product.id}
                product={product}
                currency={currency}
                currencies={currencies}
                onBuy={onBuy}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductList;
