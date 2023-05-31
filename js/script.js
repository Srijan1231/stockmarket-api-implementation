let tickerListShare = [];

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

    tickerListShare = data.values;
    // console.log(tickerList);

    const dateTime = tickerListShare.map((item) => item.datetime)[0];
    const openPrice = tickerListShare.map((item) => item.open)[0];
    const highPrice = tickerListShare.map((item) => item.high)[0];
    const lowPrice = tickerListShare.map((item) => item.low)[0];
    const closePrice = tickerListShare.map((item) => item.close)[0];
    const volumeTraded = tickerListShare.map((item) => item.volume)[0];
    dataUi.innerHTML = `
    <div style="overflow-y: auto; color:white">
    <h5 style ="text-decoration: underline;">Market Price of:${tickerUsrInput}</h5>
    <p>Date & Time :${dateTime}</p>
    <p>Open-Price :${openPrice}</p>
    <p>High-Price :${highPrice}</p>
    <p>Low-Price:${lowPrice}</p>
    <p>Closed-Price:${closePrice}</p>
    <p>Volume-Traded:${volumeTraded}</p>
    </div>
    `;
    //  console.log(tickerList.map((item) => item));
  } catch (e) {
    console.log(e);
  }
}

getBtn.addEventListener("click", currentPrice);
