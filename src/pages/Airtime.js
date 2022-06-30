import { useState } from "react"
import { FaArrowLeft } from "react-icons/fa"
import { useNavigate  } from "react-router-dom"



const Airtime = () => {
    let navigate = useNavigate 
    const [phone, setPhone] = useState('')
    const [input, setInput] = useState('')
    const [mtn, setMtn ] = useState(false);
    const [glo, setGlo] = useState(false)
    const [airtel, setAirtel] = useState(false)
    const [etisalat, setEtisalat] = useState(false)
    const Togglemtn = () =>{
     mtn ? setMtn(false) : setMtn(true)
     console.log(setMtn)
    }
    const Toggleglo = () => {
      glo ? setGlo(false) : setGlo(true)
    }
    const Toggleairtel = () => {
      airtel ? setAirtel(false) : setAirtel(true)
    }
    const Toggleetisalat = () => {
      etisalat ? setEtisalat(false) : setEtisalat(true)
    }

    const closeeverythingelse1 = () =>{
      setEtisalat(false)
      setAirtel(false)
      setGlo(false)
    }

    const closeeverythingelse2 = () =>{
      setEtisalat(false)
      setAirtel(false)
      setMtn(false)
    }

    const closeeverythingelse3 = () =>{
      setEtisalat(false)
      setGlo(false)
      setMtn(false)
    }

    const closeeverythingelse4 = () =>{
      setAirtel(false)
      setGlo(false)
      setMtn(false)
    }

  return (
    <div className='Home-page'>
    
    <div className="Wpage1">
       <FaArrowLeft 
       className="arrow"
      onClick={() => {
       navigate("/BuyCredit")
      }} /> <p>Purchase Airtime</p>
   </div> 
   <div className="choose">
    <div 
    className={ mtn ? "networks" : "network"}
    onClick={() => {
      Togglemtn() 
      closeeverythingelse1()}}>
        <img src="./imgs/mtn.png"></img><p>Mtn</p>
        </div>


    <div className={ glo ? "networks" : "network"} 
    onClick={() => {
      Toggleglo()
      closeeverythingelse2()
    }}><img src="./imgs/glo.png"></img><p>glo</p></div>

    <div
     className={ airtel ? "networks" : "network"} 
     onClick={() => {
      Toggleairtel()
      closeeverythingelse3()
     }}><img src="./imgs/airtel.png"></img><p>Airtel</p></div>
    <div 
    className={ etisalat ? "networks" : "network"} 
    onClick={() => {
      Toggleetisalat()
      closeeverythingelse4()
    }}><img src="./imgs/etisalat.png"></img><p>Etisalat</p></div>
   </div>

   <div className="E-amount">

    <label htmlFor="Enter Amount">Enter Amount</label>
    <input 
     id="phone"
     type="number"
     onChange={(e) => {setPhone(e.target.value)}}
     placeholder="100" 
     className="t-number" 
      
     required></input>
    
   </div>
   <div className="E-amount">

    <label htmlFor="Enter Phone No">Enter Phone No</label>
    <input 
    type="number" 
    placeholder="070 37XX XXX XX" 
    className="t-number"
    onChange={(e) =>{ setInput(e.target.value)}}
    ></input>
    
   </div>

   <div className="mid-bttns">

  
   <button className="f-button">
    Pay Naira
   </button >
   </div>
 
    </div>
  )
}

export default Airtime