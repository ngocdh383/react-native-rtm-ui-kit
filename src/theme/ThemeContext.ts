import { Dimensions, PixelRatio } from "react-native";
import { isTablet } from "react-native-device-info";
interface Palette {
  PRIMARY: string;
  PRIMARY_INACTIVE: string;
  SECONDARY: string;
  INFO: string;
  SUCCESS: string;
  WARNING: string;
  DANGER: string;
  DARK: string;
  DARK_1: string;
  DARK_3: string;
  LIGHT: string;
  LIGHT_3: string;
  WHITE: string;
  BLACK_1: string;
  BLACK_2: string;
  BLACK_2_2: string;
  BLACK_3: string;
  BLACK_4: string;
  BLACK_5: string;
  UNDER_LINE: string;
  LIGHT_DARK_GRADIENT: [string, string];
  DARK_LIGHT_GRADIENT: [string, string];
  GRAY_2: string;
}

interface Theme {
  Palette: Palette;
}

export const DefaultTheme: Theme = {
  Palette: {
    PRIMARY: "#109CF1",
    PRIMARY_INACTIVE: "#70C4F7",
    SECONDARY: "#00529C",
    INFO: "#743EF5",
    SUCCESS: "#0BC56B",
    WARNING: "#FFAE29",
    DANGER: "#FA375A",
    DARK: "#192A3E",
    DARK_1: "#1F2D3D",
    DARK_3: "#888888",
    LIGHT: "#E5E5E5",
    LIGHT_3: "#F2F3F5",
    WHITE: "#FFFFFF",
    UNDER_LINE: "#D3D8DD",
    LIGHT_DARK_GRADIENT: ["#1D93D1", "#293C95"],
    DARK_LIGHT_GRADIENT: ["#293C95", "#1D93D1"],
    // Text Colors
    BLACK_1: "#192A3E",
    BLACK_2: "#323C47",
    BLACK_2_2: "#90A0B7",
    BLACK_3: "#707683",
    BLACK_4: "#ACB0B5",
    BLACK_5: "#E5E5E5",
    GRAY_2: "#F2F2F2",
  },
};

const DESIGN_WIDTH = 414;
const DESIGN_HEIGHT = 736;

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const WIDTH_RATIO = SCREEN_WIDTH / DESIGN_WIDTH;
const HEIGHT_RATIO = SCREEN_HEIGHT / DESIGN_HEIGHT;

const SCREEN_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;
const DESIGN_RATIO = DESIGN_WIDTH / DESIGN_HEIGHT;

export function scaleW(size: number) {
  return Math.round(size * WIDTH_RATIO);
}

export function scaleH(size: number) {
  return Math.round(size * HEIGHT_RATIO);
}

const FONT_ZOOM = 0.1; // [0,1]
const CURRENT_PIXEL_RATIO = PixelRatio.get();
export function scaleFont(size: number) {
  const pixelDensity = CURRENT_PIXEL_RATIO;
  let scale = 1;

  if (pixelDensity < 1) {
    scale = 0.8; // ldpi
  }

  if (pixelDensity >= 1 && pixelDensity < 1.5) {
    scale = isTablet() ? 1.2 : 0.85; // mdpi
  }

  if (pixelDensity >= 1.5 && pixelDensity < 2) {
    scale = 0.9; // hdpi (tablet unavailable support)
  }

  if (pixelDensity >= 2 && pixelDensity < 3) {
    scale = isTablet() ? 1.5 : 0.95; // xhdpi
  }

  if (pixelDensity >= 3 && pixelDensity < 3.5) {
    scale = 1; // xxhdpi (tablet unavailable support)
  }

  if (pixelDensity >= 3.5 && pixelDensity < 4) {
    scale = 1.1; // xxxhdpi (tablet unavailable support)
  }

  if (pixelDensity >= 4) {
    scale = 1.02; // (tablet unavailable support)
  }

  return Math.round(size * scale);
}

export function scale(size: number) {
  return Math.round(size * (DESIGN_RATIO / SCREEN_RATIO));
}
