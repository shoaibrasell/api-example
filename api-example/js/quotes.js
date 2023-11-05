const loadQuote = () => {
  fetch("https://api.kanye.rest/")
    .then((res) => res.json())
    .then((data) => displayQuote(data))
    .catch((error) => console.log(error));
};

const loadQuote2 = async () => {
  try {
    const res = await fetch("https://api.kanye.rest/");
    const data = await res.json();
    displayQuote(data);
  } catch (error) {
    console.log(data);
  }
};

const displayQuote = (quote) => {
  const blockQuote = document.getElementById("quote");
  console.log(quote);
  blockQuote.innerHTML = quote.quote;
};

loadQuote();
