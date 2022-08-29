import create from "zustand";

export const useScreenStore = create((set) => ({
  //S -> Mobiles or small sized devices
  //M -> Tabs or medium sized devices
  //L -> Desktops or large sized devices
  deviceType:
    typeof window !== "undefined" &&
    window.innerWidth < 500 &&
    window.innerHeight < 1000
      ? "XS"
      : window.innerWidth < 720 && window.innerHeight < 1000
      ? "S"
      : window.innerWidth >= 720 &&
        window.innerWidth < 1200 &&
        window.innerHeight < 1500
      ? "M"
      : "L",

  deviceHeight:
    window.innerWidth < 720 && window.screen.height < 950
      ? "M"
      : window.innerWidth < 720
      ? "L"
      : null,
}));
