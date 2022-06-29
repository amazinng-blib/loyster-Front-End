import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Forgotpwd = () => {
  const [fpwd, setFpwd] = useState("");
  let navigate = useNavigate();

  return (
    <div className="forgotpassword-section fwd-background">
      <div className="forgotpassword">
        <p>Please enter the username or email associated with your account</p>
        <div className="form-control pwd">
          <input
            id="fpwd"
            type="text"
            placeholder="Username or Email"
            value={fpwd}
            onChange={(e) => {
              setFpwd(e.target.value);
            }}
            autoComplete="off"
          />
        </div>
        <button
          className=" sign-up-btn btn"
          onClick={() => {
            navigate("/otp");
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Forgotpwd;
