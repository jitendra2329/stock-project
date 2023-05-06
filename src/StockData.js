import React from "react";


const data =  [
    { "date": "2023-05-01", "price": 134.08, "socialMediaCount": 1200 },
    { "date": "2023-05-02", "price": 137.05, "socialMediaCount": 1100 },
    { "date": "2023-05-03", "price": 139.32, "socialMediaCount": 950 },
    { "date": "2023-05-04", "price": 141.63, "socialMediaCount": 800 },
    { "date": "2023-05-05", "price": 144.12, "socialMediaCount": 900 },
    { "date": "2023-05-06", "price": 147.16, "socialMediaCount": 1000 },
    { "date": "2023-05-07", "price": 149.12, "socialMediaCount": 800 },
    { "date": "2023-05-09", "price": 151.94, "socialMediaCount": 600 }
   ]

function StockData() {
    return (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Price</th>
              <th>S.M.count</th>
              <th>Reccomendation</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.price}</td>
                <td>{item.socialMediaCount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
}