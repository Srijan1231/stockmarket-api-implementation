let tickerList = [];

const ticker = document.getElementById("ticker-symbol");
const getBtn = document.getElementById("button");
const dataUi = document.getElementById("data-ui");

let tickerAPIkey = `323b0f21f6d14835a680183d5acefbd5`;

async function currentPrice() {
  const tickerUsrInput = ticker.value.toUpperCase();

  const tickerUrl = `https://api.twelvedata.com/time_series?symbol=${tickerUsrInput}&interval=1min&apikey=${tickerAPIkey}`;

  try {
    const response = await fetch(tickerUrl);
    const data = await response.json();

    tickerList = data.values;
    // console.log(tickerList);

    dataUi.innerText = tickerList.map((item) => item.low)[0];

    //  console.log(tickerList.map((item) => item));
  } catch (e) {
    console.log(e);
  }
}

getBtn.addEventListener("click", currentPrice);
