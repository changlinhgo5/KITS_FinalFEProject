import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    ENG: {
      translation: {
        Chessboard: "Chessboard",
        Pomodoro: "Pomodoro",
        Calculator: "Calculator",
        Form: "Form",
        Quotes: "Quotes",
        Profile: "Profile",
        Settings: "Settings",
        Theme: "Theme",
        Language: "Language",
        OK: "OK",
        Cancel: "Cancel",
        Search: "Search",
        Home: "Home",
        by: "by",
      },
    },
    VIE: {
      translation: {
        Chessboard: "Bàn cờ",
        Pomodoro: "Đồng hồ",
        Calculator: "Máy tính",
        Form: "Bản ghi",
        Quotes: "Châm ngôn",
        Profile: "Hồ sơ",
        Settings: "Cài đặt",
        Theme: "Chủ đề",
        Language: "Ngôn ngữ",
        OK: "OK",
        Cancel: "Hủy",
        Search: "Tìm kiếm",
        Home: "Trang chủ",
        by: "bởi",
      },
    },
  },
});

export default i18n;
