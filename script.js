let yesBtn = document.getElementById("yes-btn");
let noBtn = document.getElementById("no-btn");
let noMsg = document.getElementById("no-msg");

let noCliked = 0;
let clickCt = 0;

noBtn.addEventListener("click", () => {
  clickCt += 1;
  if (clickCt === 5) {
    noBtn.style.display = "none";
    noMsg.classList.add("active");
  }
  if (!noCliked) {
    noBtn.style.order = "-1";
  } else {
    noBtn.style.order = "0";
  }
  noCliked = 1 - noCliked;
});

yesBtn.addEventListener("click", () => {
  noBtn.style.display = "none";
  noMsg.classList.add("active");
  noMsg.textContent = "Yay!! Mulțumesc! Știam că nu o să poți să mă refuzi.";
});
