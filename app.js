const initialPriceEl = document.querySelector('#initial_price');
const quantityEl = document.querySelector('#quantity');
const currentPriceEl = document.querySelector('#current_price');
const tradeBtn = document.querySelector('#trade_btn');
const msgBox = document.querySelector('#msg_box');
const backgroundEl = document.querySelector('#bckgrnd_div');

const calculate = () => {
  const initialPrice = initialPriceEl.value;
  const qty = quantityEl.value;
  const currentPrice = currentPriceEl.value;

  if (
    initialPrice === '' ||
    currentPrice === '' ||
    quantity === '' ||
    initialPrice < 0 ||
    currentPrice < 0 ||
    quantity < 1
  ) {
    setMsg(`Please enter valid price or quantity`);
    return;
  }

  const priceDiff = currentPrice - initialPrice;

  if (priceDiff === 0) {
    setMsg(`You have not gained or lost any money.`);
    backgroundEl.style.backgroundColor = 'var(--primary-color)';
  } else if (priceDiff > 0) {
    //profit
    let profit = (priceDiff * qty).toFixed(2);
    let profitPercent = ((priceDiff / initialPrice) * 100).toFixed(2);
    setMsg(
      `Yay!! You made a profit of ${profit} with profit percentage of ${profitPercent}% `
    );

    backgroundEl.style.backgroundColor = '#00B300';
  } else {
    //loss
    let loss = (Math.abs(priceDiff) * qty).toFixed(2);
    let lossPercent = Math.abs(((priceDiff / initialPrice) * 100).toFixed(2));
    setMsg(
      `Oops!! You made a loss of ${loss} with loss percentage of ${lossPercent}% `
    );
    backgroundEl.style.backgroundColor = '#F60000';
  }
};

const setMsg = (msg) => {
  msgBox.innerText = msg;
};

const clickHandler = () => {
  calculate();
};

tradeBtn.addEventListener('click', clickHandler);
