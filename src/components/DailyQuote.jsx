function DailyQuote() {
  const quotes = [
    "The key to success is reflected in the Qur'an.",
    "Don't be a servant of Ramadan, be a servant of Allah.",
    "May Allah shower his blessings upon you in this holy month.",
  ];

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="DailyQuote">
      <div className="quote">
        <p>{randomQuote}</p>
      </div>
      <footer className="footer">
        <p>
          Made with <span>❤</span> by{" "}
          {/* <a href="https://khalidibrahim.co/" target="blank"> */}
          Khalid Ibrahim
          {/* </a> */}
        </p>
      </footer>
    </div>
  );
}

export default DailyQuote;
