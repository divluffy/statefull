import React from "react";
import Image from "../assets/banner-img.png";
import box from "../assets/box.png";
import card from "../assets/card.png";
import check from "../assets/check.png";
import lock from "../assets/lock.png";
import mainImg from "../assets/main-img.png";
import setting from "../assets/setting.png";
import setting2 from "../assets/setting2.png";
import sheild from "../assets/sheild.png";

function Header() {
  return (
    <header id="header">
      <div className="infos">
        <div className="big_title">
          <span>ابدا رحلتك الان</span>
        </div>
        <div className="description">
          <span>
            نقوم بتحويل فكرتك من مجرد افكار الى حلول برمجية بدأً من التصيم
            والبرمجة الى الأطلاق
          </span>
        </div>
        <a
          href="https://calendly.com/"
          target="_blank"
          className="btn_contact_us"
        >
          احجز استشارة مجانية الان!
        </a>
      </div>
      <div className="cover_header">
        <img className="mainImg" src={mainImg} alt="cover about solutions" />
        <img src={box} alt="cover about solutions" />
        <img className="card" src={card} alt="cover about solutions" />
        <img className="check" src={check} alt="cover about solutions" />
        <img className="lock" src={lock} alt="cover about solutions" />
        <img className="setting" src={setting} alt="cover about solutions" />
        <img className="setting2" src={setting2} alt="cover about solutions" />
        <img className="sheild" src={sheild} alt="cover about solutions" />
      </div>
    </header>
  );
}

export default Header;
