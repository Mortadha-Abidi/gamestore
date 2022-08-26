import React from 'react'
import { BsFillHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";


export const CardMain = ({e}) => {
  return (
    <div className="card_main">
      <img src={e.picture} alt="" className="card_main_img" />
      <div className="card_main_name">
        <h2>{e.title}</h2>
        <div className="card_main_icon">
          <i>
            <BsFillHeartFill /> <span>{e.description}</span>
          </i>
        </div>
      </div>

      <div className="stat">
        <div>
          <p>
            price<span>{e.price}$</span>
          </p>
        </div>
        <div>
          <p>
           In stock<span>{e.stock}</span>
          </p>
        </div>
      </div>

      <div className="card_main_button">
      <Link to="/product">  <button  className="button btn">
          view product
        </button></Link>
       
      </div>
    </div>
  )
}
