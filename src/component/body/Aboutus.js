import React from "react";
import "./Aboutus.css";
import image from "../images/background.jpg";
function Aboutus() {
  return (
    <div className="aboutus">
      <h1 className="aboutus_title">WISTERIA</h1>
      <div className="aboutus_info">
        Address: SNP 3 937 01 Szlovakia, Zseliz
        <br></br>
        Nyivatartas: 8:00 - 16:00
        <br></br>
        Tel: 0907 687 678
        <br></br>
        Email: kicsindy.julius@gmail.com
      </div>
      <p className="aboutus_para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue
        urna, bibendum posLorem ipsum dolor sit amet, consectetur adipiscing
        elit. Proin augue urna, bibendum posLorem ipsum dolor sit amet,
        consectetur adipiscing elit. Proin augue urna, bibendum posLorem ipsum
        dolor sit amet, consectetur adipiscing elit. Proin augue urna, bibendum
        posLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue
        urna, bibendum posLorem ipsum dolor sit amet, consectetur adipiscing
        elit. Proin augue urna, bibendum posLorem ipsum dolor sit amet,
        consectetur adipiscing elit. Proin augue urna, bibendum posLorem ipsum
        dolor sit amet, consectetur adipiscing elit. Proin augue urna, bibendum
        posLorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue
        urna, bibendum pos
      </p>

      <img className="aboutus_image" src={image} alt="kep" />
      <div></div>
    </div>
  );
}

export default Aboutus;
