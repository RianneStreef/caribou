import React from "react";
import PlatDuJour from "../components/PlatDuJour";

import "../styles/Intro.css";

const Intro = (props) => {
  let { platDuJour, prix, description } = props;

  return (
    <div>
      <h2>Welcome</h2>

      <div className="welcome-container">
        <div className="welcome-text">
          <p className="padding">
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
          <p className="padding">
            Sed ultricies blandit orci, vel fermentum justo auctor a. Mauris
            dictum, ligula eu suscipit lacinia, nisl sem congue lorem, dictum
            aliquet dui libero eu lectus. Quisque placerat sit amet nulla vel
            rhoncus. Nam nec aliquam erat, a eleifend enim. Morbi egestas
            feugiat fringilla. Vivamus vitae tincidunt erat. Vestibulum vitae
            mauris sed ex mattis tincidunt. Fusce id lacus arcu. Vivamus
            elementum ac dui non placerat. Suspendisse eros odio, volutpat nec
            tortor sed, luctus dapibus eros. Aenean tristique, est non accumsan
            sodales, velit dolor condimentum diam, et tristique eros libero sed
            justo. Sed lacinia magna non tortor faucibus accumsan. Quisque
            dictum, sapien quis commodo egestas, nibh mi ornare urna, in
            sollicitudin est massa ac ipsum. Ut in convallis enim. Aenean diam
            enim, cursus ut enim vitae, porta facilisis ex.
          </p>
        </div>
        <PlatDuJour
          platDuJour={platDuJour}
          prix={prix}
          description={description}
        />
      </div>
    </div>
  );
};

export default Intro;
