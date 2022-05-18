import photoshop from "../../assets/ps.png";
import illustrator from "../../assets/illustrator.png";
import premiere from "../../assets/premiere.png";
import afterEffects from "../../assets/afterEffects.png";
import drawing from "../../assets/drawing.png";

const GraphicDesign = () => {
  const listItem =
    "grid justify-center w-9/12 mx-auto border-2 border-black mb-20";
  const imageSize = "w-44 ";
  const listItemIcon = "justify-center align-middle mx-auto";
  return (
    <div className="w-full pt-20 bg-[#FFD527] mx-auto grid md:grid-cols-2">
      <div alt="text column" className="">
        <div alt="title" className="py-3 relative">
          <div className="w-screen lg:w-[400px] h-[5px] bg-black absolute bottom-[178px] block md:hidden"></div>
          <h2 className="text-5xl md:text-6xl font-bold text-center md:text-left lg:text-left mb-20">
            GRAPHIC DESIGNER
          </h2>
        </div>
        <div alt="icons-tablet-and-laptop"></div>
        <div alt="icons" className="block md:hidden">
          <ul className="grid">
            <li className={listItem}>
              <ul className="grid  text-center">
                <li className={listItemIcon}>
                  <img src={photoshop} alt="Photoshop" className={imageSize} />
                </li>
                <li>
                  <h2 className="text-3xl font-bold underline">PHOTOSHOP</h2>
                </li>
                <li>
                  <p className="text-xl">
                    For digital art, image editing and graphic desing overall.
                  </p>
                </li>
              </ul>
            </li>
            <li className={listItem}>
              <ul className="grid  text-center">
                <li className={listItemIcon}>
                  <img
                    src={illustrator}
                    alt="Illustrator"
                    className={imageSize}
                  />
                </li>
                <li>
                  <h2 className="text-3xl font-bold underline">Illustrator</h2>
                </li>
                <li>
                  <p className="text-xl">
                    For vector art, ux/ui desing and logo design.
                  </p>
                </li>
              </ul>
            </li>
            <li className={listItem}>
              <ul className="grid  text-center">
                <li className={listItemIcon}>
                  <img src={premiere} alt="Premiere" className={imageSize} />
                </li>
                <li>
                  <h2 className="text-3xl font-bold underline">PREMIERE</h2>
                </li>
                <li>
                  <p className="text-xl">Mainly for video and audio editing</p>
                </li>
              </ul>
            </li>
            <li className={listItem}>
              <ul className="grid text-center">
                <li className={listItemIcon}>
                  <img
                    src={afterEffects}
                    alt="After Effects"
                    className={imageSize}
                  />
                </li>
                <li>
                  <h2 className="text-3xl font-bold underline">
                    AFTER EFFECTS
                  </h2>
                </li>
                <li>
                  <p className="text-xl">
                    For video post-production, vfx and animation
                  </p>
                </li>
              </ul>
            </li>
            <li className={listItem}>
              <ul className="grid text-center">
                <li>
                  <h3 className="text-3xl font-bold underline">BRANDING</h3>
                </li>
                <li>
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </li>
              </ul>
            </li>
            <li className={listItem}>
              <ul className="grid text-center">
                <li>
                  <h3 className="text-3xl font-bold underline">ART</h3>
                </li>
                <li>
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </li>
              </ul>
            </li>
            <li className={listItem}>
              <ul className="grid text-center">
                <li>
                  <h3 className="text-3xl font-bold underline">2D ANIMATION</h3>
                </li>
                <li>
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </li>
              </ul>
            </li>
            <li className={listItem}>
              <ul className="grid text-center">
                <li>
                  <h3 className="text-3xl font-bold underline">
                    CREATIVE WRITING
                  </h3>
                </li>
                <li>
                  <p className="text-xl">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div alt="drawing">
        <img src={drawing} alt="Drawing" />
      </div>
    </div>
  );
};

export default GraphicDesign;
