// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    am: {
      translation: {
        title: "ረመዳን ስንት ቀን ቀረው?",
        subtitle: "ረመዳን የቀሩት ቀናት",
        days: "ቀን",
        hours: "ሰዓት",
        minutes: "ደቂቃ",
        seconds: "ሴኮንድ",
        expiredMessage: "ረመዳን ሙባረክ!",
        countdownMessage: "በሰነ ሰማይ ወደ ረመዳን ወደሚወጣ ጊዜ ተመን",
      },
    },
    en: {
      translation: {
        title: "Ramadan Countdown",
        subtitle: "Remaining time until the beginning of Ramadan",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        expiredMessage: "Ramadan Mubarak!",
        countdownMessage: "Remaining time until Ramadan",
      },
    },
    ar: {
      translation: {
        title: "عد تنازلي إلى رمضان",
        subtitle: "الوقت المتبقي حتى بداية رمضان",
        days: "أيام",
        hours: "ساعات",
        minutes: "دقائق",
        seconds: "ثواني",
        expiredMessage: "رمضان مبارك!",
        countdownMessage: "الوقت المتبقي حتى رمضان",
      },
    },
  },
  fallbackLng: "am", // Default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
