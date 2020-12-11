function sleep(miliseconds) {
  var currentTime = new Date().getTime();
  while (currentTime + miliseconds >= new Date().getTime()) {}
}

sleep(300);

while (document.querySelector(".loading666")) {
  Loading = document.querySelector(".loading666");
  Loading.parentNode.removeChild(Loading);
}

while (document.querySelector(".ukryty")) {
  Ukryty = document.querySelector(".ukryty");
  Ukryty.classList.remove("hidden");
  Ukryty.classList.remove("ukryty");
}
