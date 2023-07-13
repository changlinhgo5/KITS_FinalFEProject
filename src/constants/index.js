import VietnameseIcon from "../assets/vietnam.png";
import EnglishIcon from "../assets/united-kingdom.png";
import { theme } from "antd";

export const LANGUAGES = [
  { label: "Vietnamese", code: "VIE", icon: VietnameseIcon },
  { label: "English", code: "ENG", icon: EnglishIcon },
];

// theme dark
export const themeDark = {
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#00b96b",
    colorText: "#ffffff",
  },
  components: {},
};

// theme light
export const themeLight = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#1a77ff",
  },
};
