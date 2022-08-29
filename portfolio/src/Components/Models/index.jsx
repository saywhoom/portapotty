import React from "react";
import { useScreenStore } from "../../Store/Store";

import LandingHead from "./LandingHead";
import Stickman from "./Stickman";
import Dog from "./Dog";
import Doll from "./Doll";
import RatSkin from "./RatSkin";

const Index = () => {
  let { deviceType, deviceHeight } = useScreenStore();
  const adjustHeight = (scale) => {
    document.body.style.setProperty(
      "--responsive-height",
      window.screen.height * scale + "px"
    );
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth < 500) {
      let height = window.innerHeight;
      let width = window.innerWidth;

      if (height < 550) {
        if (width <= 380) {
          adjustHeight(3.15);
        } else if (width > 380 && width < 400) {
        } else if (width > 400) {
        }
      } else if (height >= 550 && height < 620) {
        if (width <= 360) {
          adjustHeight(3.2);
        }
        if (width > 360 && width <= 380) {
        } else if (width > 380 && width < 400) {
        } else if (width > 400) {
          adjustHeight(3.2);
        }
      } else if (height >= 620 && height < 700) {
        if (width <= 360) {
          adjustHeight(3.2);
        } else if (width > 360 && width <= 380) {
          if (height < 640) {
            if (height > 630 && height < 640) {
              adjustHeight(3);
            } else {
              adjustHeight(3.5);
            }
          } else {
            adjustHeight(3);
          }
        } else if (width > 380 && width < 400) {
          if (height > 680) {
            adjustHeight(3.3);
          } else {
            adjustHeight(3.1);
          }
        } else if (width > 400) {
          adjustHeight(3.55);
        }
      } else if (height >= 700 && height < 800) {
        if (width <= 360) {
          if (height < 720) {
            if (height <= 714) {
              adjustHeight(3.6);
            } else {
              adjustHeight(3.2);
            }
          } else {
            adjustHeight(3.6);
          }
        } else if (width > 360 && width <= 380) {
          adjustHeight(3.4);
        } else if (width > 380 && width < 400) {
          if (height < 720) {
            adjustHeight(3.2);
          } else if (height >= 720 && height < 750) {
            adjustHeight(3.3);
          } else if (height >= 750 && height < 790) {
            adjustHeight(3.6);
          } else {
            adjustHeight(3.1);
          }
        } else if (width > 400 && width < 428) {
          if (width < 415) {
            if (height < 720) {
              adjustHeight(3.1);
            } else if (height > 730 && height < 760) {
              adjustHeight(3.25);
            } else if (height > 760 && height < 795) {
              adjustHeight(3.4);
            } else {
              adjustHeight(3.55);
            }
          } else {
            adjustHeight(3.2);
          }
        } else {
          adjustHeight(3.15);
        }
      } else if (height >= 800 && height < 900) {
        if (width <= 380) {
        } else if (width > 380 && width < 400) {
          adjustHeight(3.6);
        } else if (width > 400 && width < 420) {
          if (height < 850) {
            adjustHeight(3.2);
          } else {
            adjustHeight(3.6);
          }
        } else {
          adjustHeight(3.45);
        }
      } else {
        if (width <= 380) {
        } else if (width > 380 && height < 400) {
        } else if (width > 400) {
        }
      }
    }
  });

  return (
    <>
      <LandingHead deviceType={deviceType} deviceHeight={deviceHeight} />
      <Stickman deviceType={deviceType} deviceHeight={deviceHeight} />
      <Dog deviceType={deviceType} deviceHeight={deviceHeight} />
      <Doll deviceType={deviceType} deviceHeight={deviceHeight} />
      <RatSkin deviceType={deviceType} deviceHeight={deviceHeight} />
    </>
  );
};

export default Index;
