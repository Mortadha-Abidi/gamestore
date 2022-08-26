import React from 'react'
import { BsFillHeartFill } from "react-icons/bs";
import AddModal from './AddModal';

export const Prodcard = ({el,del}) => {
  return (
    <div className="card_main">
      <img src={el.picture} alt="" className="card_main_img" />
      <div className="card_main_name">
        <h2>{el.title}</h2>
        <div className="card_main_icon">
          <i>
            <BsFillHeartFill /> <span>{el.quantity}</span>
          </i>
        </div>
      </div>

      <div className="stat">
        <div>
          <p>
            price<span>{el.price}£</span>
          </p>
        </div>
        <div>
          <p>
            stock<span>{el.stock}</span>
          </p>
        </div>
      </div>

      <div className="card_main_button">
        
        <AddModal/>
        <button type="button" class="btn btn-danger" onClick={()=>del(el.product_id)}>delete</button>
        
      </div>
    </div>
  )
}
