import React from "react";
import "./Aboutus.css";
import image from "../images/background.jpg";
function Aboutus() {
  return (
    <div className="aboutus">
      <h1 className="aboutus_title">WISTERIA</h1>
      <p className="aboutus_para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin augue
        urna, bibendum posuere libero nec, fermentum porta tortor. Duis non eros
        consectetur libero blandit euismod id vitae velit. Donec eu sagittis
        risus, pellentesque rutrum neque. Fusce id velit varius, iaculis elit
        ut, aliquam enim. Phasellus suscipit orci et elit malesuada interdum.
        Aliquam erat volutpat. Sed lectus neque, mollis scelerisque scelerisque
        a, congue vitae purus. Curabitur erat lectus, consectetur in tortor in,
        porta rutrum nibh. Nunc varius arcu neque, sit amet egestas risus
        aliquet ac. Phasellus nulla urna, dapibus non pharetra ut, egestas a
        nisi. Proin suscipit pretium tempus. Aenean vehicula in diam a
        ultricies. Sed in pulvinar ex. Sed consectetur enim nec ante ullamcorper
        pulvinar sed fringilla metus. Praesent non tellus sit amet massa
        consequat tincidunt. Vestibulum vitae ipsum accumsan, vestibulum nunc
        id, ultricies enim. Nunc pulvinar leo ipsum, facilisis venenatis diam
        scelerisque ac. Pellentesque pretium mauris nec tellus venenatis
        tristique. Integer in rhoncus diam. Proin finibus vulputate justo vitae
        pulvinar. Donec maximus efficitur magna, eu eleifend erat tempus in.
        Nulla a hendrerit ipsum. Duis egestas est sit amet bibendum egestas.
        Fusce vitae lectus elit. Nam tempor, risus in viverra ullamcorper, elit
        ex feugiat elit, a tincidunt magna dolor nec lacus. Donec feugiat nisi
        fringilla placerat ornare. Donec quis erat elementum, tincidunt odio
        vitae, lacinia sem. Aenean sapien mauris, luctus ac pharetra non,
        tristique non erat. Maecenas pretium dignissim diam, quis facilisis
        justo rhoncus sed. Vivamus quis blandit elit. Morbi bibendum magna eget
        enim tempus fringilla. Suspendisse ultricies scelerisque eros, sed
        iaculis enim venenatis vel. Integer ullamcorper pellentesque est, a
        accumsan nunc faucibus ac.
      </p>
      <img className="aboutus_image" src={image} alt="kep" />
    </div>
  );
}

export default Aboutus;
