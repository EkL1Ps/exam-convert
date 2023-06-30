import "./App.scss";
import ProductList from "../Products/ProductList";
import { useState } from "react";

export interface Currency {
  code: string;
  symbol: string;
  coefficient: number;
}

const currencies: Currency[] = [
  { code: "USD", symbol: "$", coefficient: 1 },
  { code: "UAH", symbol: "₴", coefficient: 37 },
  { code: "EUR", symbol: "€", coefficient: 0.9 },
  { code: "JPY", symbol: "¥", coefficient: 144 },
];

const App: React.FC = () => {
  const [currency, setCurrency] = useState<string>("USD");
  const [total, setTotal] = useState<number>(0);

  const handleCurrencyChange = (newCurrency: string) => {
    setCurrency(newCurrency);
  };

  const handleBuyProduct = (price: number) => {
    const selectedCurrency = currencies.find((curr) => curr.code === currency);
    if (selectedCurrency) {
      const priceInSelectedCurrency = price / selectedCurrency.coefficient;
      setTotal((prevTotal) => prevTotal + priceInSelectedCurrency);
    }
  };

  const getPriceWithCurrency = (price: number, currency: string): string => {
    const selectedCurrency = currencies.find((curr) => curr.code === currency);
    if (selectedCurrency) {
      const priceInSelectedCurrency = price * selectedCurrency.coefficient;
      return `${selectedCurrency.symbol}${priceInSelectedCurrency.toFixed(2)}`;
    }
    return `$${price.toFixed(2)}`;
  };

  return (
    <>
      <div className="wrapper">
        <header className="header">
          <h1>Our shop page</h1>
        </header>
        <div className="exam-content">
          <div className="currency-buttons">
            {currencies.map((curr) => (
              <button
                key={curr.code}
                onClick={() => handleCurrencyChange(curr.code)}
              >
                {curr.code}
              </button>
            ))}
          </div>
          <ProductList
            currency={currency}
            currencies={currencies}
            onBuy={handleBuyProduct}
          />
          <div className="total">
            Total: {getPriceWithCurrency(total, currency)}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
