// Nasłuchiwanie zdarzenia scrolla
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

// Funkcja do rozkładania elementów collapsible
document.addEventListener("DOMContentLoaded", () => {
  var coll = document.getElementsByClassName("collapsible");
  for (let i = 0; i < coll.length; i++) {
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

  // Funkcja sleep
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // Obracanie elementu .loading
  document.querySelectorAll(".loading").forEach(async (element) => {
    let rotate = 180;
    let loaded = false; // Kontrola zakończenia animacji

    do {
      element.style.transform = `rotate(${rotate}deg)`;
      await sleep(1200);
      rotate += 180;
    } while (!loaded);

    // Po załadowaniu ukryj animację i pokaż załadowane elementy
    let loadingContainer = document.querySelector(".loading-container");
    if (loadingContainer) loadingContainer.style.display = "none";

    document.querySelectorAll(".loaded").forEach((el) => {
      el.style.display = "flex";
    });

    await sleep(1800);
    document.querySelectorAll(".loaded").forEach((el) => {
      el.style.display = "none";
    });
  });

  // Obsługa odliczania dla "/pl"
  if (window.location.pathname.startsWith("/pl")) {
    let deadline1 = new Date("Dec 17, 2019 16:36:39 GMT+0200").getTime();
    let deadline2 = new Date("Aug 3, 2025 23:59:59 GMT+0200").getTime();

    setInterval(() => {
      let now = new Date().getTime();
      let t1 = now - deadline1;
      let t2 = deadline2 - now;

      // Obsługa odliczania #web-dev
      let webDevElement = document.querySelector("#web-dev");
      if (webDevElement) {
        let weeks = Math.floor(t1 / (1000 * 60 * 60 * 24 * 7));
        let days = Math.floor(
          (t1 % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24)
        );
        let hours = Math.floor((t1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((t1 % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((t1 % (1000 * 60)) / 1000);
        webDevElement.innerHTML = `${weeks} tygodni (oraz ${days}d ${hours}h ${minutes}m ${seconds}s)`;
      }

      // Obsługa odliczania #wiek
      let timerElement = document.querySelector("#wiek");
      if (timerElement) {
        if (t2 >= 0) {
          let days = Math.floor(t2 / (1000 * 60 * 60 * 24));
          let hours = Math.floor(
            (t2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          );
          let minutes = Math.floor((t2 % (1000 * 60 * 60)) / (1000 * 60));
          let seconds = Math.floor((t2 % (1000 * 60)) / 1000);
          timerElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        } else {
          timerElement.innerHTML =
            "*już mam 24, ale zapomniałem zmienić, sorki*";
        }
      }
    }, 1000);
  }

  // Funkcja do mapowania ocen na gwiazdki
  const ocenyMap = {
    o10: '<div class="flex flex-row text-amber-500"><i class="fa-solid fa-star p-1"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i><i class="fa-solid fa-star p-1 pl-0"></i></div>',
    // ... (pozostałe oceny jak w Twoim kodzie)
  };

  function zamienOceny() {
    let ocenyElement = document.getElementById("Oceny");
    if (!ocenyElement) return;

    let str = ocenyElement.innerHTML;
    for (let ocena in ocenyMap) {
      let regex = new RegExp(ocena, "g");
      str = str.replace(regex, ocenyMap[ocena]);
    }
    ocenyElement.innerHTML = str;
  }

  zamienOceny();

  // Modyfikacja odstępów w elementach tekstowych
  const elements = document.body.querySelectorAll("p, span, div, h1, h2, h3");
  elements.forEach((el) => {
    el.innerHTML = el.innerHTML.replace(/\s([aiouwzAIUOWZ])\s/g, " $1&nbsp;");
  });

  // Obsługa hamburger menu
  function toggleNav() {
    let navRight = document.querySelector("#nav-right");
    if (navRight) {
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
  }

  document.querySelector("#hamburger").addEventListener("click", toggleNav);

  // Ustawienie aktualnego roku
  let yearElement = document.getElementById("year");
  if (yearElement) yearElement.innerHTML = new Date().getFullYear();
});
