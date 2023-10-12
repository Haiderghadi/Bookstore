document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    const body = document.querySelector(".container");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 500) {
      body.style.backgroundColor = "#fff";
      body.style.transition = "all ease 0.3s";
    } else {
      body.style.backgroundColor = "#ff608c";
      body.style.transition = "all ease 0.3s";
    }
    if (scrollPosition > 1100) {
      body.style.backgroundColor = "#00c1b5";
      body.style.transition = "all ease 0.3s";
    } else {
      body.style.backgroundColor = "ff608c";
      body.style.transition = "all ease 0.3s";
    }
    if (scrollPosition > 1800) {
      body.style.backgroundColor = "#ff651a";
      body.style.transition = "all ease 0.3s";
    } else {
      body.style.backgroundColor = "ff608c";
      body.style.transition = "all ease 0.3s";
    }
    if (scrollPosition > 2400) {
      body.style.backgroundColor = "#ffbe00";
      body.style.transition = "all ease 0.3s";
    } else {
      body.style.backgroundColor = "ff608c";
      body.style.transition = "all ease 0.3s";
    }
    if (scrollPosition > 2900) {
      body.style.backgroundColor = "#1d3fbb";
      body.style.transition = "all ease 0.3s";
    } else {
      body.style.backgroundColor = "ff608c";
      body.style.transition = "all ease 0.3s";
    }
  });
});
