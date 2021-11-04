import React from "react";
import PlatDuJour from "../components/PlatDuJour";

import "../styles/Intro.css";

const Intro = (props) => {
  let { platDuJour, prix, description } = props;

  return (
    <div className="welcome">
      <div className="welcome-text">
        <p className="padding intro-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          sagittis, velit in scelerisque hendrerit, ligula eros dapibus magna,
          commodo tristique magna odio vel metus. Nulla finibus lorem ut justo
          fermentum dapibus. Pellentesque sed faucibus augue, id mattis urna.
          Vestibulum ut ornare tortor, non venenatis quam. Fusce dignissim
          mauris sagittis dolor vehicula efficitur. Proin metus tortor,
          elementum condimentum aliquam in, tristique eget leo. Quisque augue
          quam, finibus ac magna id, cursus rhoncus eros. Donec eu magna
          efficitur ex sodales tincidunt quis sed diam.
        </p>
        <p className="signature">- L'equipe du Caribou</p>
      </div>
      <PlatDuJour
        platDuJour={platDuJour}
        prix={prix}
        description={description}
      />
    </div>
  );
};

export default Intro;
