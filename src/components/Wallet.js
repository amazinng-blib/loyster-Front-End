import { FaArrowLeft } from "react-icons/fa"
import { useState } from "react"

const Wallet = () => {
    const [amount, setAmount] = useState('')
  return (
    <div className="wallet">
     <div className="fund">
        <FaArrowLeft className="arrow"/> <p>Fund Account</p>
      </div>  

      <div className="fund-1">
        <p> Please Enter Funding Amount</p>
        <input 
        type="number"
        id="amount"
        className="amount"
        value={amount}
        onChange={(e) => {
            setAmount(e.target.value)
        }} ></input>
        </div> 
    </div>
  )
}

export default Wallet
