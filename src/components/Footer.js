import React from "react";
// import {logo} from "./logo.png"
// import logo from "./logo.png";
// import InstagramIcon from '@mui/icons-material/Instagram';
import "./footer.css";
function Footer() {
  return (
    <React.Fragment>
      <div className="blend" style={{ fontSize: '0px' }}>
        s
      </div>
      <div className="footer">
        <div className="heading">
          <img
            className="img1"
            src="https://media3.giphy.com/media/KFnSuizdGVCtkVFOXM/source.gif"
            alt=""
          />
        </div>
        <div className="conw">
          {/* <div className="contacts1">
            <h1>About Us</h1>
            <p>
              We are here to provide free services to our customers.People who
              are not financially stable to use the ORIGINAL NETFLIX. we provide
              you with the best and the upcoming movies in the market and their
              trailers as well as their brief information and rating.
              Do support us and follow us on instagram and linkedin for further updates.
            </p>
          </div> */}
          <div className="contacts">
            <h1>Contact Us On</h1>
            <div className="cat">
              <div className="catty">
                <a href="https://www.instagram.com/aditayyyyyyyyy/">
                <img
                  className="imgn"
                  src="http://smsv.sg/wp-content/uploads/2020/08/insta-gif.gif"
                  alt=""
                />
                </a>
                
                <h3>Instagram</h3>
              </div>
              <div className="catty">
                <a href="https://www.facebook.com/profile.php?id=100063579615355">
                <img
                  className="imgn"
                  src="https://cliply.co/wp-content/uploads/2021/09/CLIPLY_142110010_ORGANIC_FB_ICON_400.gif"
                  alt=""
                />
                </a>
                
                <h3>Facebook</h3>
              </div>
              <div className="catty">
                <a href="https://www.linkedin.com/in/aditya-verma-089746203/">
                <img
                  className="imgn linkdin"
                  src="https://i.pinimg.com/originals/de/b4/6f/deb46f02a59e3b3a2aa58fac16290d63.gif"
                  alt=""
                />
                </a>
                
                <h3>linkedin</h3>
              </div>
              <div className="catty">
                <a href="https://github.com/adi-alt">
                <img
                  className="imgn linkdin"
                  src="https://media0.giphy.com/avatars/mwooodward/cIe5MvDvX4Vc.gif"
                  alt=""
                />
                </a>
                
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="ml">Copyright © our-own-mini-player.netlify.app</div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
