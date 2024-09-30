// toggle button
const firstToggle = document.getElementById("first-toggle");
const secondToggle = document.getElementById("second-toggle");
const animatedBtn = document.getElementById("animated-btn");
const secondPrice = document.getElementById("second-price");
const thirdPrice = document.getElementById("third-price");
const time1 = document.getElementById("time1");
const time2 = document.getElementById("time2");
const time3 = document.getElementById("time3");
const time4 = document.getElementById("time4");
const time6 = document.getElementById("time6");
const time7 = document.getElementById("time7");
const bottomClose = document.getElementById("bottom-close");
const bottomInfo = document.getElementById("bottom-info");
firstToggle.addEventListener("click", () => {
  animatedBtn.style.display = "none";
  secondToggle.classList.remove("active");
  firstToggle.classList.add("active");
  secondPrice.innerHTML = "74";
  thirdPrice.innerHTML = "166";
  time1.style.display = "block";
  time2.style.display = "none";
  time3.style.display = "block";
  time4.style.display = "none";
  time6.style.display = "none";
  time7.style.display = "none";
});
secondToggle.addEventListener("click", () => {
  animatedBtn.style.display = "block";
  firstToggle.classList.remove("active");
  secondToggle.classList.add("active");
  secondPrice.innerHTML = "99";
  thirdPrice.innerHTML = "199";
  time1.style.display = "none";
  time2.style.display = "block";
  time3.style.display = "none";
  time4.style.display = "block";
  time6.style.display = "block";
  time7.style.display = "block";
});
// bottom close
bottomClose.addEventListener("click", () => {
  bottomInfo.style.display = "none";
});

// pre loader
document.addEventListener("DOMContentLoaded", function () {
  // Simulate loading progress (this is just for example purposes)
  let preloader = document.getElementById("preloader");
  let bottomInfo = document.getElementById("bottom-info");
  let messageIcon = document.querySelector(".message-icon"); // Select the message icon
  let width = 0;

  let interval = setInterval(function () {
    if (width >= 100) {
      clearInterval(interval);
      // Once loading is done, fade out the preloader
      preloader.style.opacity = 0;
      setTimeout(function () {
        preloader.style.display = "none";
        // Show the message icon immediately after preloading finishes
        messageIcon.style.display = "inline-block";
        messageIcon.style.opacity = 0;
        setTimeout(function () {
          messageIcon.style.opacity = 1; // Fade in effect for the message icon
        }, 100);

        // After 200 ms, show the bottom-info
        setTimeout(function () {
          bottomInfo.style.display = "flex";
          bottomInfo.style.opacity = 0;
          setTimeout(function () {
            bottomInfo.style.opacity = 1; // Fade in effect for bottom-info
          }, 100);
        }, 200); // Delay of 200ms for bottom-info
      }, 300); // Delay to allow for opacity transition of preloader
    } else {
      width += 10; // Increment progress (adjust as needed)
      preloader.style.width = width + "%";
    }
  }, 100); // Speed of loading progress (adjust as needed)
});

// slide button
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".demo-btn"); // Select all buttons

  // Apply the slide-up animation to all buttons
  buttons.forEach(function (button) {
    setTimeout(function () {
      button.classList.add("slide-up");
    }, 500); // Delay before the animation starts
  });
});
