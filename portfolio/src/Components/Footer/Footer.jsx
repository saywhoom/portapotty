import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Footer.css";
import { MdEmail } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { FaTiktok } from "react-icons/fa";
function Footer() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const redirectRoblox = () => {
    window.open("https://www.roblox.com/users/14292629/profile");
  };
  const redirectTwitter = () => {
    window.open("https://twitter.com/saywhooom");
  };
  const redirectEmail = () => {
    window.location.href = "mailto:tret@moonbeam.gg?body=yourBody";
  };
  const redirectTiktok = () => {
    window.open("https://www.tiktok.com/@saywhooom?lang=en");
  };
  return (
    <div className='footer-container'>
      <span>Contact Us</span>
      <div className='foot-links'>
        <img
          className='roblox-img'
          alt='Roblox Icon'
          src='/assets/logos/roblox.png'
          onClick={redirectRoblox}
        />
        <MdEmail className='email-icon' onClick={redirectEmail} />
        <AiOutlineTwitter className='twitter-icon' onClick={redirectTwitter} />
        <FaTiktok className='tiktok-icon' onClick={redirectTiktok} />
      </div>
    </div>
  );
}

export default Footer;
