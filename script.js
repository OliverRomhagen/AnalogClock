const secondHand = document.querySelector(".second__hand");
const minsHand = document.querySelector(".min__hand");
const hoursHand = document.querySelector(".hour__hand");

function setDate() {
  const timeZone = document.getElementById("timeZone").value;
  let date = new Date().toLocaleString("en-US", { timeZone: timeZone });
  date = new Date(date);
  const seconds = date.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = date.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = date.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);
