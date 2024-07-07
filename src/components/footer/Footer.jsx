import React from "react";
import "./footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaCity } from "react-icons/fa";
import { SiBandsintown } from "react-icons/si";
import { MdDonutSmall } from "react-icons/md";
import { SiThewashingtonpost } from "react-icons/si";
import { BsTelephonePlusFill } from "react-icons/bs";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { IoMdMailUnread } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <section className="contact">
        <div>
          <h2>find us</h2>

          <li id="bit">
            <FaXTwitter />
            twitter
          </li>
          <li id="bit">
            <FaInstagramSquare />
            instagram
          </li>
          <li id="bit">
            <FaLinkedin />
            linkedin
          </li>
          <li id="bit">
            <FaFacebook /> facebook
          </li>
        </div>
        <div>
          <h2>Company branches</h2>

          <li id="bit">
            <FaCity />
            city hall
          </li>
          <li id="bit">
            <SiBandsintown />
            central business district
          </li>
          <li id="bit">
            <MdDonutSmall />
            moi avenue{" "}
          </li>
          <li id="bit">
            <SiThewashingtonpost />
            lavington
          </li>
        </div>
        <div>
          <h2>Follow us</h2>
          <label htmlFor="text">            <IoMdMailUnread />
          Email</label>
          <input type="text" />
        </div>
        <div>
          <h2>
            <FaLocationCrosshairs />
            Location
          </h2>
          <li id="bit">
            <IoLocationSharp />
            address:city Hall Street
          </li>
          <li id="bit">
            <BsTelephonePlusFill />
            Tel:+133-888-99
          </li>
          <li id="bit">
            <IoMdMailUnread />
            Email:beulah@yahoo.com
          </li>
        </div>
      </section>
      <p id="right"> Tonie all right reserved</p>
    </div>
  );
}

export default Footer;
