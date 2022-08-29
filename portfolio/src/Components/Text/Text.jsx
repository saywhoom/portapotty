import React, { useEffect } from "react";
import { useScreenStore } from "../../Store/Store";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Text.css";

function Text() {
  const { deviceType } = useScreenStore();
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const redirectGlossophobia = () => {
    window.open("https://www.roblox.com/games/6243090754/Glossophobia");
  };

  const redirectMarbleMania = () => {
    window.open(
      "https://www.roblox.com/games/4950724851/200-BADGES-Marble-Mania"
    );
  };

  const redirectRLGL = () => {
    window.open(
      "https://www.roblox.com/games/7540891731/Red-Light-Green-Light"
    );
  };

  const redirectRatHouse = () => {
    window.open(
      "https://www.roblox.com/games/4950724851/200-BADGES-Marble-Mania"
    );
  };

  return (
    <div className='text-container'>
      <div
        data-aos={deviceType === "L" || deviceType === "M" ? "fade-up" : ""}
        className='landingHead'
      >
        <span className='landingHead-text'>Tret</span>
        <span className='landingHead-text-2'>Game Design / 3D Modelling</span>
      </div>

      <div className='stickman'>
        <div
          data-aos={deviceType === "L" || deviceType === "M" ? "fade-left" : ""}
          className='text-container stickman-container'
        >
          <span className='title'>Glossophobia</span>
          <span className='visits'>12.5 Million Visits</span>
          <button className='btn' onClick={redirectGlossophobia}>
            Explore
          </button>
        </div>
      </div>

      <div className='dog'>
        <div
          data-aos={
            deviceType === "L" || deviceType === "M" ? "fade-right" : ""
          }
          className='text-container dog-container'
        >
          <span className='title'>Marble Mania</span>
          <span className='visits'>60 Million Visits</span>
          <button className='btn' onClick={redirectMarbleMania}>
            Explore
          </button>
        </div>
      </div>

      <div className='doll'>
        <div
          data-aos={deviceType === "L" || deviceType === "M" ? "fade-left" : ""}
          className='text-container doll-container'
        >
          <span className='title'>Red Light Green Light</span>
          <span className='visits'>383 Million Visits</span>
          <button className='btn' onClick={redirectRLGL}>
            Explore
          </button>
        </div>
      </div>

      <div className='rat'>
        <div
          data-aos={
            deviceType === "L" || deviceType === "M" ? "fade-right" : ""
          }
          className='text-container rat-container'
        >
          <span className='title'>Rat House</span>
          <span className='visits'>8 Million Visits</span>
          <button className='btn' onClick={redirectRatHouse}>
            Explore
          </button>
        </div>
      </div>
    </div>
  );
}

export default Text;
