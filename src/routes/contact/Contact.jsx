import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const listItemStyle = "flex";
  const listItemH3 = "my-auto ml-5 md:ml-10 border-l-2 pl-5 md:pl-10";
  const linkStyle =
    "text-gray-200 hover:underline text-xl md:text-4xl underline-offset-8 hover:no-underline font-light";
  return (
    <div className="w-full h-screen flex  bg-black text-gray-200 justify-center ">
      <div className=" flex flex-col justify-center my-10  ">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-10 mx-auto">
          FIND ME AT:
        </h2>
        <ul className="border-white border-2 p-0 md:p-10">
          <li className={listItemStyle}>
            <FontAwesomeIcon
              icon={faLinkedin}
              size="4x"
              className="w-12 md:w-20"
            />
            <h3 className={listItemH3}>
              <a
                className={linkStyle}
                href="https://www.linkedin.com/in/juliosalasz/"
              >
                JULIOSALASZ
              </a>
            </h3>
          </li>
          <li className={listItemStyle}>
            <FontAwesomeIcon
              icon={faTwitter}
              size="4x"
              className="w-12 md:w-20"
            />
            <h3 className={listItemH3}>
              <a className={linkStyle} href="https://twitter.com/JulioSalasZ">
                @JULIOSALASZ
              </a>
            </h3>
          </li>
        </ul>
        <div className="flex justify-end pt-3 md:pt-10">
          <h3 className="align-middle">Made by Julio Salas © 2022</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
