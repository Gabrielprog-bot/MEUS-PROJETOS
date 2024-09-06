const Carousel = document.getElementById("container-photos");
let number = 1;
function carousel() {
  number++;
  if ((number) => 1) {
    Carousel.style.transform = `translateX(-${number}00vh)`;
  } else if ((number) => 1) {
    number = 1;
    Carousel.style.transform = `translateX(-${number}00vh)`;
  }
}

setInterval(carousel, 1000);
