import { GrHomeRounded } from "react-icons/gr"
import { BsWallet2 } from "react-icons/bs"
import { CgProfile } from "react-icons/cg"
import { RiExchangeFundsFill } from "react-icons/ri" 
import { BiBell } from "react-icons/bi"
import { useState,useEffect } from "react"
import { useNavigate } from "react-router"
import { FiSearch } from "react-icons/fi"


const Home = () => {
  let navigate = useNavigate
  const [value, setValue] = useState('');

  const onSearch = (e) => {
    setValue(e.target.value);
  }
  return (
    <div className='Home-page'>
        <div className='Home'>
           <div className="top">
           <p>Hello Abina!</p> <BiBell style={{width:"29px", height:"32px"}}/>
           </div> 
           <div className="search ">
           <FiSearch className="s-icon" style={{fontSize:'20px'}}/>
           <input
           type="text"
           className="search-bar"
           placeholder="Search"
           value={value}
           onChange ={onSearch}>
           </input>
           </div>
           <div className="bottom">
           <p>Top Action</p>
           <div className="actions">
               <div className="half">

               <span className="box">
              <img src="./imgs/money-transfer.jpg" className="img"></img>
              <p>Transfer</p>
              </span>

              <span className="box2">
              <img src="./imgs/i-billing.png" className="img1"></img>
              <p>Pay Bills</p>
            </span>

               </div>

             <div className="half">
              
             <span className="box1">
              <img src="./imgs/emojione_mobile-phone.png" className="img2"></img>
              <p>Data & airtime</p>
            </span>
           
            <span className="box3">
              <img src="./imgs/Money bag.jpg" className="img3"></img>
              <p>Check Balance</p>
            </span>

             </div>
            </div> 
           </div>

            </div>  
            <div className="footer">
            <div className="icons">
           <div className="item" >
           <GrHomeRounded className="icon1" onClick={() => {
              navigate("/Home")
            }}/> 
            <p>Home</p>
           </div>
            <div className="item">
            <BsWallet2 className="icon"/> 
            <p>Wallet</p>
            </div>
            <div className="item">
            <RiExchangeFundsFill className="icon3"/>
            <p>Funds</p>
            </div>
            <div className="item">
            <CgProfile className="icon2"/>
            <p>Profile</p>
            </div>
            </div>
            <div className="pointer">
             <img src="./imgs/Vector.png" className="img4"></img> 
            </div>
            </div>
    </div>
  )
}

export default Home