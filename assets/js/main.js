// Funkcja do odliczania czasu
function startCountdown(id, deadline) {
  let deadlineTime = new Date(deadline).getTime();
  let x = setInterval(() => {
    let now = new Date().getTime();
    let t = now - deadlineTime;

    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);

    document.querySelector(`#${id}`).innerHTML =
      days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    if (t < 0) {
      clearInterval(x);
      document.querySelector(`#${id}`).innerHTML = "*coś się zepsuło*";
    }
  }, 1000);
}

// Funkcja do zamiany ocen
function replaceRatings(elementId) {
  const ratings = {
    o10: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i></div>',
    o9: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star-half-stroke p-1 pl-0"></i></div>',
    o8: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
    o7: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star-half-stroke p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
    o6: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
    o5: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star-half-stroke p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
    o4: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
    o3: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star-half-stroke p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
    o2: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
    o1: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star-half-stroke p-1"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
    o0: '<div class="flex flex-row text-amber-500"><i class="fa-regular fa-star p-1"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i><i class="fa-regular fa-star p-1 pl-0"></i></div>',
    oS: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-heart p-1"></i><i class="fa-solid fa-heart p-1 pl-0"></i><i class="fa-solid fa-heart p-1 pl-0"></i><i class="fa-solid fa-heart p-1 pl-0"></i><i class="fa-solid fa-heart p-1 pl-0"></i></div>',
  };

  let str = document.getElementById(elementId).innerHTML;
  for (let key in ratings) {
    str = str.replace(new RegExp(key, "g"), ratings[key]);
  }
  document.getElementById(elementId).innerHTML = str;
}

// Funkcja do obsługi scrolla
window.onscroll = function () {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height =
    document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
};

// Funkcja do animacji ładowania
async function loadingAnimation() {
  let rotate = 180;
  do {
    document.querySelector(".loading").style.transform = `rotate(${rotate}deg)`;
    await sleep(1200);
    rotate += 180;
  } while (!loaded);

  document.querySelector(".loading-container").style.display = "none";
  document.querySelectorAll(".loaded").forEach((element) => {
    element.style.display = "flex";
  });

  await sleep(1800);
  document.querySelectorAll(".loaded").forEach((element) => {
    element.style.display = "none";
  });
}

// Funkcja do spania
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Uruchomienie odliczeń na podstawie ścieżki URL
if (window.location.pathname.startsWith("/pl")) {
  startCountdown("web-dev", "Dec 17, 2019 16:36:39 GMT+0200");
  startCountdown("linux", "Oct 2, 2018 16:37:24 GMT+0200");
  startCountdown("wiek", "Aug 3, 2025 23:59:59 GMT+0200");
} else if (window.location.pathname === "/en/") {
  startCountdown("web-dev", "Dec 17, 2019 16:36:39 GMT+0200
