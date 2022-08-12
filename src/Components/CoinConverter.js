import { useEffect, useState } from "react";

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selectedCoin, setSelectedCoin] = useState();
  const [money, setMoney] = useState();
  const onSelect = (e) => {
    setSelectedCoin([
      coins[e.target.selectedIndex].quotes.USD.price,
      coins[e.target.selectedIndex].name,
    ]);
  };
  const onChange = (e) => {
    setMoney(() => e.target.value);
  };

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <h1>The Coins (#{coins.length})</h1>
      <h2>
        {loading ? (
          "LOADING . . ."
        ) : (
          <>
            <input
              type="number"
              placeholder="write your money ($)"
              value={money}
              onChange={onChange}
            ></input>
            <select onChange={onSelect} defaultValue="default">
              <option value="default">select your coin</option>
              {coins.map((coin, index) => (
                <option key={index}>{coin.symbol}</option>
              ))}
            </select>
            <p>
              {!selectedCoin || !money
                ? "write & select"
                : `You can buy ${money / selectedCoin[0]} ${
                    selectedCoin[1]
                  } coins`}
            </p>
          </>
        )}
      </h2>
    </>
  );
}

export default Coin;
