import React,{useState,useEffect} from "react";
import "./maincontainer.css";
import Banner from "../img/1.jpg";
import Card1 from "../img/card1.jpg";
import Card2 from "../img/card2.jpg";
import Card3 from "../img/card3.jpg";
import Card4 from "../img/card4.jpg";
import Card5 from "../img/card5.jpg";
import Card6 from "../img/card6.jpg";
import { CardMain } from "./CardMain";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import { MainRightBottomCard } from "./MainRightBottomCard";
import { Link } from "react-router-dom";

import axios from "axios";
const date=Date()
export const MainContainer = () => {
  const[data,setData]=useState([])
  const[prod,setProd]=useState([])
  const[admin,setAdmin]=useState([])
  console.log(admin,"hgdghg");

  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/admin")
      .then((res) => {
        console.log(res.data);
        setAdmin(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  },[]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/users")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  },[]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/products")
      .then((res) => {
        setProd(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  },[]);
  return (
    <>
    
<div className="maincontainer">
      <div className="left">
        <div
          className="banner"
          style={{
            // background: `url(${Banner})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="textContainer">
            <h1>welcome Mr : </h1>
            <h2>mortadha</h2>
            <div className="bid">
              <Link to="/product"><button  className="button">
               view product
              </button></Link>
              <p>
                work start <span>{date}</span>
              </p>
            </div>
          </div>
        </div>

        <div className="cards">
          <div className="filters">
            <div className="popular">
              
            </div>
            <div className="filter_buttons">
              <a href="#" className="button">
                All
              </a>
              <a href="#" className="button2">
                online games
              </a>
              <a href="#" className="button2">
                solo games
              </a>
              
            </div>
          </div>
          <main> 
            {
              prod.map(e=>(
                <CardMain e={e} key={e.id} />
              ))
            }        
           
          </main>
        </div>
      </div>
      <div className="right">
        <MainRightBottomCard data={data}/>
      </div>
    </div> 
    </>
     )
}
