import React, { useEffect, useState } from "react";

function Form() {
  const [stock, setStock] = useState("");
  const [stockData, setStockData] = useState({});

  const [stockTable, setStockTable] = useState({});

  const stockArr = Object.keys(stockData);

  const clickHandler = (e) => {
    e.preventDefault();
    for (const key in stockData) {
      if (key === stock) {
        setStockTable(stockData[key]);
      }
    }
  };

  useEffect(() => {
    try {
      fetch("stockDB.json", {
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => setStockData(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  function generateRecommendation(price, socialMediaCount) {
    if (price < 100 && socialMediaCount > 1000) {
      return "Buy";
    } else if (price > 130 && socialMediaCount < 900) {
      return "Sell";
    } else {
      return "Hold";
    }
  }

  return (
    <center>
      <div className="container">
        <form>
          <img src={"./sktimg.jpg"}  height="70px" width="90px" alt="not found" />
          <h1>Welcome to Stock!</h1>

          <label>
            <select
              className="stock1"
              onChange={(e) => setStock(e.target.value)}
            >
              {stockArr.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <select className="stock2">
              <option value={7}>7 </option>
              <option value={10}>10 </option>
              <option value={14}>14 </option>
            </select>
          </label>
          <br />
          <button onClick={(e) => clickHandler(e)}>Submit</button>
        </form>
      </div>

      <table border={1}>
        <thead>
          <tr>
            <th>Date</th>
            <th>Price</th>
            <th>S.M.count</th>
            <th>Reccomendation</th>
          </tr>
        </thead>
        <tbody>
          {Object.keys(stockTable).length > 0 &&
            stockTable.map(({ date, price, socialMediaCount }, index) => (
              <tr key={index}>
                <td>{date}</td>
                <td>{price}</td>
                <td>{socialMediaCount}</td>
                <td>{generateRecommendation(price, socialMediaCount)}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </center>
  );
}

export default Form;
