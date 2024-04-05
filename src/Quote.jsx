import getQuote from "./getQuote";
import { useState } from "react";
import "./Quote.css";

/** Displays quote and "get new quote" button
 *
 * Props: getQuoteOnStart (boolean)
 * State: quote {text: ..., author: ...}
 *
 * TodoApp -> Quote
 */
function Quote() {
  const [quote, setQuote] = useState("");
  const [firstTime, setFirstTime] = useState(true);

  async function getNewQuote() {
    setQuote("");
    setQuote(await getQuote());
  }

  if (firstTime) {
    getNewQuote();
    setFirstTime(false);
  }

  return (
    <div>
      {quote && (
        <div>
          <p className="Quote-text">{quote.text}</p>
          <p className="Quote-author">{quote.author}</p>
        </div>
      )}
      {quote ? (
        <button className="Quote-QuoteBtn" onClick={getNewQuote}>
          Nü quøte
        </button>
      ) : (
        <div className="Quote-loading"></div>
      )}
    </div>
  );
}

export default Quote;
