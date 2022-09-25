import React from "react";
import logo from "../../Images/Mobile Phones/logo.jpg";
import {
  TiSocialLinkedinCircular,
  TiSocialFacebookCircular,
  TiSocialGooglePlusCircular,
  TiSocialInstagramCircular,
  TiSocialTwitterCircular,
} from "react-icons/ti";
import logo2 from "../../Images/logo2.png";
const Footer = () => {
  return (
    <div className="Footer">
      <div>
        <TiSocialFacebookCircular size={35} />
        <TiSocialGooglePlusCircular size={35} />
        <TiSocialInstagramCircular size={35} />
        <TiSocialTwitterCircular size={35} />
        <TiSocialLinkedinCircular size={35} />
      </div>
      <div className="PaddingTop">
        <img src={logo2} style={{ width: "10%" }} />
      </div>
      <div></div>
    </div>
  );
};

export default Footer;
