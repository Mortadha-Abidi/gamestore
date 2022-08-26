import React, { useEffect } from "react";
import "../sidebar/sidebar.css";
import {
  FaDelicious,
  FaShoppingCart,
  FaWallet,
  FaChartLine,
  FaRegClock,
  FaCog,
  FaSignOutAlt,
  FaRegUserCircle
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi";
import { FaBell, FaChevronDown } from "react-icons/fa";
import { MainContainer } from "../../pages/MainContainer";

export const SideBar = () => {
    useEffect(() => {
        const mainMenuLi = document
          .getElementById("mainMenu")
          .querySelectorAll("li");
    
        function changeActive() {
          mainMenuLi.forEach((n) => n.classList.remove("active"));
          this.classList.add("active");
        }
    
        mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
      }, []);
  return (
    <>
   <menu>    

      <Link to="/"><img src="https://www.andrelleducation.com/wp-content/uploads/2016/01/cropped-Circle-logo-purple.png" alt="" /></Link>

      <ul id="mainMenu">
       
       <Link to="/product"> <li><FaDelicious /></li></Link>
       <Link to="/alo"> <li><FaShoppingCart /></li></Link>
       <Link to="no"> <li><FaWallet /></li></Link>
        <li><FaChartLine /></li>
        <li><FaRegClock /></li>
      </ul>

      <ul className="lastMenu">
      
        <li><FaRegUserCircle /></li>
        <li><FaSignOutAlt /></li>
      </ul>
    </menu>
    {/* <>
    <div className="container">
    <div className="topContainer">
      <div className="inputBox">
        <input type="text" placeholder="Search items, collections" />
        <i>
          <BiSearchAlt />
        </i>
      </div>

      <div className="profileContainer">
        <i className="profileIcon">
          <FaBell />
        </i>
        <div className="profileImage">
          <img src="https://th.bing.com/th/id/R.8009b6c96c825b474ebb95ef9e808115?rik=xLU%2fJzr35t22Fw&pid=ImgRaw&r=0" alt="" />
        </div>
        <p className="profileName">Olivia Christine</p>
       
      </div>
    </div>
    
  
    </div>
    </> */}
    </>
    
    
    
  );
  
}
