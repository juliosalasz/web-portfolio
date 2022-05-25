import useScreenType from "react-screentype-hook";

import NavigationDesktop from "../../components/navigationDesktop/navigationDesktop";
import NavigationMobile from "../../components/navigationMobile/NavigationMobile";

const Navigation = () => {
  const screenType = useScreenType({
    mobile: 425,
    tablet: 767,
    desktop: 1024,
    largeDesktop: 1440,
  });

  return screenType.isMobile ? <NavigationMobile /> : <NavigationDesktop />;
};

export default Navigation;
