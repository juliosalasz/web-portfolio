import photoshop from "../../assets/ps.png";
import illustrator from "../../assets/illustrator.png";
import premiere from "../../assets/premiere.png";
import afterEffects from "../../assets/afterEffects.png";

const GraphicDesign = () => {
  return (
    <div>
      <div>
        <div alt="title">
          <h2>GRAPHIC DESIGNER</h2>
        </div>
        <div alt="icons">
          <ul>
            <li>
              <img src={photoshop} alt="Photoshop" />
            </li>
            <li>
              <img src={illustrator} alt="Illustrator" />
            </li>
            <li>
              <img src={premiere} alt="Premiere" />
            </li>
            <li>
              <img src={afterEffects} alt="After Effects" />
            </li>
          </ul>
        </div>
        <div alt="extraskills">
          <ul>
            <li>
              <h3>BRANDING</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </li>
            <li>
              <h3>ART</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </li>
            <li>
              <h3>2D ANIMATION</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </li>
            <li>
              <h3>CREATIVE WRITING</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                aliquam erat volutpat.
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default GraphicDesign;
