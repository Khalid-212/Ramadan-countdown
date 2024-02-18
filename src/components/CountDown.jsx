import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function CountDown() {
  const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [countdown, setCountdown] = useState(t("expiredMessage"));
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "Ramadan Countdown App",
        text: "Counting down to the beginning of Ramadan!",
        url: window.location.href,
      });
      console.log("Successfully shared!");
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  useEffect(() => {
    const countDownDate = new Date("March 10, 2024 00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        setCountdown(t("expiredMessage"));
      } else {
        setCountdown(t("countdownMessage"));
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    };

    // Simulate loading for 1 second
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    const interval = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(interval);
      clearTimeout(loadingTimeout);
    };
  }, [t]);

  const changeLanguage = (e) => {
    const selectedLanguage = e.target.value;
    i18n.changeLanguage(selectedLanguage);
  };

  return (
    <div className="countDownPage">
      {loading ? (
        <div className="loading">
          <p>{t("Ramadan is loading")}</p>
          <div className="progress-container">
            <div className="progress-bar"></div>
          </div>
        </div>
      ) : countdown === t("expiredMessage") ? (
        <div className="countdown">
          <div className="countdownFinal">
            <p>{countdown}</p>
          </div>
        </div>
      ) : (
        <div className="countdown">
          <div className="language">
            <select onChange={changeLanguage} value={i18n.language}>
              <option value="am">Amharic</option>
              <option value="en">English</option>
              <option value="ar">Arabic</option>
            </select>
          </div>
          <h2 className="title">{t("title")}</h2>
          <div className="countDownPage"></div>
          <p className="subtitle">{t("subtitle")}</p>
          <div className="time">
            <div className="timeCount days">
              <p>{days}</p>
              <p className="small">{t("days")}</p>
            </div>
            <p className="colon">:</p>
            <div className="timeCount hours">
              <p>{hours}</p>
              <p className="small">{t("hours")}</p>
            </div>
            <p className="colon">:</p>
            <div className="timeCount minutes">
              <p>{minutes}</p>
              <p className="small">{t("minutes")}</p>
            </div>
            <p className="colon">:</p>
            <div className="timeCount seconds">
              <p>{seconds}</p>
              <p className="small">{t("seconds")}</p>
            </div>
          </div>
          <button className="shareButton" onClick={handleShare}>
            Share with friends
          </button>
        </div>
      )}
    </div>
  );
}

export default CountDown;
