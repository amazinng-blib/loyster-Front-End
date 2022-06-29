import { GrHomeRounded } from "react-icons/gr";
import { BsWallet2 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { RiExchangeFundsFill } from "react-icons/ri";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Footer = () => {
  let navigate = useNavigate();
  return (
    <>
      <div className="footer">
        <div className="icons">
          <div className="item">
            <GrHomeRounded
              className="icon1"
              onClick={() => {
                navigate("/Home");
              }}
            />
            <p>Home</p>
          </div>

          <Link to="/Wallet">
            <div className="item">
              <BsWallet2 className="icon" />
              <p>Wallet</p>
            </div>
          </Link>

          <div className="item" onClick={() => navigate("/fundchoosemode")}>
            <RiExchangeFundsFill className="icon3" />
            <p>Funds</p>
          </div>
          <div className="item">
            <CgProfile className="icon2" />
            <p>Profile</p>
          </div>
        </div>
        <div className="pointer">
          <img src="./imgs/Vector.png" className="img4" alt="footer icon" />
        </div>
      </div>
    </>
  );
};

export default Footer;
