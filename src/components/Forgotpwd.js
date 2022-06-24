import { useState } from "react"

const Forgotpwd = () => {
    const [fpwd, setFpwd ] = useState('')
  return (
    <div className="forgotp">
        <p>Please enter the username or email associated with your account</p>
        <input 
        id="fpwd"
        type="text"
        placeholder="Username or Email"
        value={fpwd}
        onChange = {
            (e) => {
                setFpwd(e.target.value) 
            }
        }
        autoComplete = "off"
        ></input>
        <input 
        type="submit"
        value="Continue"
        className="subbtn"></input>
    </div>
  )
}

export default Forgotpwd