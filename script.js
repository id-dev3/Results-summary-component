let countElement = document.getElementById("count");
  let count = 0;

  setInterval(function() {
    if (count < 76) {
      count++;
      countElement.textContent = count;
      if (count === 76) {
        countElement.classList.add("success");
      }
    }
}, 50);

let countElement1 = document.getElementById("count1");
  let count1 = 0;

  setInterval(function() {
    if (count1 < 80) {
      count1++;
      countElement1.textContent = count1;
      if (count1 === 76) {
        countElement1.classList.add("success");
      }
    }
}, 20);

let countElement2 = document.getElementById("count2");
  let count2 = 0;

  setInterval(function() {
    if (count2 < 92) {
      count2++;
      countElement2.textContent = count2;
      if (count2 === 76) {
        countElement2.classList.add("success");
      }
    }
}, 20);

let countElement3 = document.getElementById("count3");
  let count3 = 0;

  setInterval(function() {
    if (count3 < 61) {
      count3++;
      countElement3.textContent = count3;
      if (count3 === 76) {
        countElement3.classList.add("success");
      }
    }
}, 20);

let countElement4 = document.getElementById("count4");
  let count4 = 0;

  setInterval(function() {
    if (count4 < 72) {
      count4++;
      countElement4.textContent = count4;
      if (count4 === 76) {
        countElement4.classList.add("success");
      }
    }
}, 20);