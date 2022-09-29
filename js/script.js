let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

var currentX, prevX, translateToBottom, scale, opacity;
var getDOM = {
  html: document.querySelector("html"),
  header: document.querySelector(".header"),
  nav: document.querySelector(".navigation"),
  headImg: document.querySelector(".header__image"),
  headBackImg: document.querySelector(".header__background-image"),
  navigation: document.querySelector(".navigation"),
};

document.addEventListener("scroll", function () {
  currentX = getDOM.html.scrollTop;
  // console.log(getDOM.nav.offsetHeight);

  if (currentX < getDOM.header.clientHeight / 0.25) {
    translateToBottom = currentX / 30;
    translateToBottom2 = currentX / 10;
    getDOM.headImg.style.transform = "translateY(" + translateToBottom + "rem)";
    getDOM.headBackImg.style.transform =
      "translateY(" + translateToBottom2 + "rem)";
  }

  // if (currentX > prevX) {
  //   getDOM.navigation.style.transform =
  //     "translateY(-" + getDOM.nav.offsetHeight / 10 + "rem)";
  // } else if (currentX < prevX) {
  //   getDOM.navigation.style.transform = "translateY(0rem)";
  // }

  prevX = getDOM.html.scrollTop;
});

getDOM.headImg.addEventListener("mousedown", function () {
  getDOM.headImg.style.transform = "scale(0.9)";
});

getDOM.headImg.addEventListener("mouseup", function () {
  getDOM.headImg.style.transform = "scale(1)";
});

window.onload = function () {
  document
    .querySelector(".btn__ripple-layer")
    .addEventListener("mousedown", function (e) {
      document.querySelector(".btn__ripple").style.top = e.offsetY + "px";
      document.querySelector(".btn__ripple").style.left = e.offsetX + "px";
      // console.log(Math.floor(e.timeStamp));
      if (
        document
          .querySelector(".btn__ripple")
          .classList.contains("ripple-now") === false
      ) {
        document.querySelector(".btn__ripple").classList.add("ripple-now");
      } else {
        document.querySelector(".btn__ripple").classList.remove("ripple-now");
        setTimeout(function () {
          document.querySelector(".btn__ripple").classList.add("ripple-now");
        }, 10);
      }
    });
};
