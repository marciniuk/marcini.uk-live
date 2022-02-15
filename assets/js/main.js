// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

let loaded = false;

var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = "100%";
    }
  });
}

document.querySelectorAll(".loading").forEach(async (element) => {
  let rotate = 180;
  do {
    element.style.transform = `rotate(${rotate}deg)`;
    await sleep(1200);
    rotate += 180;
  } while (loaded !== true);
  document.querySelector(".loading-container").style.display = "none";
  document.querySelectorAll(".loaded").forEach((element) => {
    element.style.display = "flex";
  });
  await sleep(1800);
  document.querySelectorAll(".loaded").forEach((element) => {
    element.style.display = "none";
  });
});

if (window.location.pathname === "/en/") {
  let deadline = new Date("Dec 17, 2019 16:36:39 GMT+0200").getTime();
  let x = setInterval(() => {
    let now = new Date().getTime();
    let t = now - deadline;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.querySelector("#web-dev").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    if (t < 0) {
      clearInterval(x);
      document.querySelector("#web-dev").innerHTML = "*coś się zepsuło*";
    }
  }, 1000);
}

if (window.location.pathname === "/en/") {
  let deadline = new Date("Oct 2, 2018 16:37:24 GMT+0200").getTime();
  let x = setInterval(() => {
    let now = new Date().getTime();
    let t = now - deadline;
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.querySelector("#linux").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    if (t < 0) {
      clearInterval(x);
      document.querySelector("#linux").innerHTML = "*coś się zepsuło*";
    }
  }, 1000);
}

if (window.location.pathname === "/en/") {
  let deadline = new Date("Aug 3, 2022 23:59:59 GMT+0200").getTime();
  let x = setInterval(() => {
    let now = new Date().getTime();
    let t = deadline - now;
    let weeks = Math.floor(t / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor((t / (1000 * 60 * 60 * 24)) - (t / (1000 * 60 * 60 * 24 * 7) * 7));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.querySelector("#wiek").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    if (t < 0) {
      clearInterval(x);
      document.querySelector("#wiek").innerHTML =
        "*już mam 20 ale zapomniałem zmienić, sorki*";
    }
  }, 1000);
}

if (window.location.pathname === "/pl/") {
  let deadline = new Date("Dec 17, 2019 16:36:39 GMT+0200").getTime();
  let x = setInterval(() => {
    let now = new Date().getTime();
    let t = now - deadline;
    let weeks = Math.floor(t / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor((t / (1000 * 60 * 60 * 24)) - (t / (1000 * 60 * 60 * 24 * 7) * 7));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.querySelector("#web-dev").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    if (t < 0) {
      clearInterval(x);
      document.querySelector("#web-dev").innerHTML = "*coś się zepsuło*";
    }
  }, 1000);
}

if (window.location.pathname === "/pl/") {
  let deadline = new Date("Oct 2, 2018 16:37:24 GMT+0200").getTime();
  let x = setInterval(() => {
    let now = new Date().getTime();
    let t = now - deadline;
    let weeks = Math.floor(t / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor((t / (1000 * 60 * 60 * 24)) - (t / (1000 * 60 * 60 * 24 * 7) * 7));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.querySelector("#linux").innerHTML =
      weeks + "w " + days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    if (t < 0) {
      clearInterval(x);
      document.querySelector("#linux").innerHTML = "*coś się zepsuło*";
    }
  }, 1000);
}

if (window.location.pathname === "/pl/") {
  let deadline = new Date("Aug 3, 2022 23:59:59 GMT+0200").getTime();
  let x = setInterval(() => {
    let now = new Date().getTime();
    let t = deadline - now;
    let weeks = Math.floor(t / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor((t / (1000 * 60 * 60 * 24)) - (t / (1000 * 60 * 60 * 24 * 7) * 7));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    document.querySelector("#wiek").innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    if (t < 0) {
      clearInterval(x);
      document.querySelector("#wiek").innerHTML =
        "*już mam 20 ale zapomniałem zmienić, sorki*";
    }
  }, 1000);
}

function toggleNav() {
  navRight = document.querySelector("#nav-right");
  if (navRight.className.includes("nav-hidden")) {
    navRight.classList.remove("nav-hidden");
    navRight.classList.add("nav-down");
    navRight.classList.remove("nav-up");
  } else {
    navRight.classList.add("nav-hidden");
    navRight.classList.add("nav-up");
    navRight.classList.remove("nav-down");
  }
}
document.querySelector("#hamburger").addEventListener("click", toggleNav);

document.getElementById("year").innerHTML = new Date().getFullYear();
