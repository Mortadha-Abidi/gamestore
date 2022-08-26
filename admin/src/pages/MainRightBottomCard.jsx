import React from 'react'
import axios from 'axios';
import seller1 from "../img/seller1.jpg";
import seller2 from "../img/seller2.jpg";
import seller3 from "../img/seller3.jpg";
import seller4 from "../img/seller4.jpg";
import seller5 from "../img/seller5.jpg";

const TopSeller = [
  { id: 1, seller_name: "Jane Cooper", username: "hello@jane", imgSrc: seller1 },
  { id: 2, seller_name: "Ariene McCoy", username: "@ariene", imgSrc: seller2 },
  { id: 3, seller_name: "Theresa Webb", username: "@theresa", imgSrc: seller3 },
  { id: 4, seller_name: "Ralph Edwards", username: "@ralph", imgSrc: seller4 },
  { id: 5, seller_name: "Raplhie", username: "@raplhie", imgSrc: seller5 },
];


export const MainRightBottomCard = ({data}) => {
 
  return (
    <div className="bottom_card">
      <div className="bottomCard_name">
        <h2>Top Seller</h2>
        {/* <a href="#">View More</a> */}
      </div>

      {TopSeller &&
        data.map((seller) => (
          <div className="topSeller" key={seller.id}>
            <div className="topSellerImg">
              <img src={seller?.picture} alt="" />
            </div>
            <div className="topSellerName">
              <p>
                {seller?.firstname} <span>{seller?.email}</span>
              </p>
            </div>
            <a href="#" className="button">
              view
            </a>
          </div>
        ))}
    </div>
  );
  
}
