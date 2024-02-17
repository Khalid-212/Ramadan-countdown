// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Ramadan Countdown",
        subtitle: "Remaining time until the end of Ramadan",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds",
        expiredMessage: "Ramadan Mubarak!",
        countdownMessage: "Remaining time until Ramadan",
      },
    },
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
    ar: {
      translation: {
        title: "عد تنازلي رمضان",
        subtitle: "الوقت المتبقي حتى نهاية رمضان",
        days: "أيام",
        hours: "ساعات",
        minutes: "دقائق",
        seconds: "ثواني",
        expiredMessage: "رمضان مبارك!",
        countdownMessage: "الوقت المتبقي حتى رمضان",
      },
    },
  },
  fallbackLng: "en", // Default language
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
