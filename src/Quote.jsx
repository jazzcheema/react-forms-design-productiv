import getQuote from "./getQuote";
import { useState } from "react";

/** Displays quote and "get new quote" button
 *
 * Props: getQuoteOnStart (boolean)
 * State: quote {text: ..., author: ...}
 *
 * TodoApp -> Quote
 */
function Quote() {
    const [ quote, setQuote ] = useState("");
    const [ firstTime, setFirstTime ] = useState(true);

    async function getNewQuote() {
        setQuote(await getQuote())
    }

    if (firstTime) {
        getNewQuote();
        setFirstTime(false);
    }

    return (<div>
        {quote && (
            <div>
                <p>{quote.text}</p>
                <p>{quote.author}</p>
            </div>
        )}
        {quote
        ? <button onClick={getNewQuote}>Nü quøte</button>
        : <button onClick={getNewQuote}>Click here for inspirational quøte</button>
        }
    </div>);
}

export default Quote;