import React,{useState,useEffect} from "react";
import '../maincontainer.css'
import Banner from "../../img/1.jpg";
import Card1 from "../../img/card1.jpg";
import Card2 from "../../img/card2.jpg";
import Card3 from "../../img/card3.jpg";
import Card4 from "../../img/card4.jpg";
import Card5 from "../../img/card5.jpg";
import Card6 from "../../img/card6.jpg";
import { Prodcard } from "./Prodcard";
import { BiSearchAlt } from "react-icons/bi";
import axios from "axios";
import { Addgame } from "./Addgame";


export const Products = () => {
  const[data,setData]=useState([])
  const [text, settext] = useState("")
  
  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/products")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        // console.log(err);
      });
  },[]);
  return (
    <>
<div className="maincontainer">
      <div className="left">
        
        <div className="cards">
        <div className="topContainer">
    <div className="inputBox">
      <input type="text" value={text} onChange={(e)=>settext(e.target.value)} placeholder="Search items, collections" />
      <i>
        <BiSearchAlt />
      </i>
    </div>
    <Addgame/>
    </div>

          <main>
            {
              data.filter(el=>el.title.includes(text)).map((el,i)=>(
                 <Prodcard el={el} key={el.id}/>
              ))
            }

            {/* <Prodcard imgSrc={Card1} title={"Cubic Thunder"} hearts={"65"} />
            <Prodcard imgSrc={Card2} title={"Pokemon Ball"} hearts={"65"} />
            <Prodcard imgSrc={Card3} title={"Pyramid God"} hearts={"65"} />
            <Prodcard imgSrc={Card4} title={"Stunning Cube"} hearts={"65"} />
            <Prodcard imgSrc={Card5} title={"Start Crystal"} hearts={"65"} />
            <Prodcard imgSrc={Card6} title={"Crystal Bird"} hearts={"65"} /> */}
          </main>
        </div>
      </div>
     <div className="right">
      </div> 
    </div> 
    </>
  )
}
