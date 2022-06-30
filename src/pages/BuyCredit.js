import { FaArrowLeft } from "react-icons/fa"
import { useNavigate  } from "react-router-dom"

const BuyCredit = () => {
    let navigate = useNavigate
  return (
    <div className="Home-page">
        <div className="Wpage1">
       <FaArrowLeft 
       className="arrow"
      onClick={() => {
       navigate("/Home")
      }} /> <p>Purchase Airtime</p>
   </div>

   {/*  not done here  */}

   <p className="c-s">Choose Service</p>
   <div className="buycredit">
   <div className="gray">
    <p>Airtime</p>
    <input 
   type="radio"
   className="radio"
   name="credit"
   ></input>
   </div>

    <div className="gray">
        <p>Data</p>
        <input 
   type="radio"
   className="radio"
   name="credit"
   ></input>
   </div>
   {/* still working here as well  */}

   <button className="f-button p-naira">
    Proceed
   </button >

    </div>
    </div>
  )
}

export default BuyCredit