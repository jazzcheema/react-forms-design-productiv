"use strict";

const API_URL = "https://inspo-quotes-api.herokuapp.com/quotes/random";

/** Makes request to quote api and returns new quote
 * like: {text: ..., author: ... }*/
async function getQuote() {
    await sleep(3000);
    const result = await fetch(`${API_URL}`);
    const quote = await result.json();
    return quote.quote;
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default getQuote;