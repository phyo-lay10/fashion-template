//Changing search input JS

let search_input = document.getElementById("Search");
let icon_items = document.getElementsByClassName("icon-item");

search_input.onfocus = function () {
  for (let item of icon_items) {
    item.style.display = "none";
  }
  this.style.width = "100%";
};

search_input.onblur = function () {
  for (let item of icon_items) {
    item.style.display = "block";
  }
  this.style.width = "65px";
};

// Navbar background

window.onscroll = function () {
  let nav = document.getElementById("nav");

  if (window.pageYOffset > 500) {
    nav.classList.add("bg");
  } else {
    nav.classList.remove("bg");
  }
};

// Navbar show & hide

let bars = document.getElementById("bars");
let navbar_menu = document.getElementById("navbar-menu");

bars.onclick = function () {
  navbar_menu.classList.toggle("active");

  if (this.innerHTML == '<i class="fas fa-bars"></i>') {
    this.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    this.innerHTML = '<i class="fas fa-bars"></i>';
  }
};

// Slider JS

let next_btn = document.getElementById("next_btn");
let sliders = document.getElementsByClassName("slider");
let slider_no = 1;

function next() {
  document.getElementById("slider" + slider_no).classList.remove("active");
  slider_no++;

  if (slider_no > sliders.length) {
    slider_no = 1;
  }
  document.getElementById("slider" + slider_no).classList.add("active");
}

function prev() {
  document.getElementById("slider" + slider_no).classList.remove("active");
  slider_no--;

  if (slider_no < 1) {
    slider_no = sliders.length;
  }

  document.getElementById("slider" + slider_no).classList.add("active");
}

next_btn.onclick = next;
prev_btn.onclick = prev;

// setInterval(next,3000)

// Product Filter JS

let all_btn = document.getElementById("all-btn");
let cloth_btn = document.getElementById("cloth-btn");
let shoe_btn = document.getElementById("shoe-btn");
let watch_btn = document.getElementById("watch-btn");
let other_btn = document.getElementById("other-btn");

let cloth_cards = document.getElementsByClassName("cloth");
let shoe_cards = document.getElementsByClassName("shoe");
let watch_cards = document.getElementsByClassName("watch");
let other_cards = document.getElementsByClassName("other");

all_btn.onclick = function () {
  for (let cloth_card of cloth_cards) {
    cloth_card.style.display = "block";
  }
  for (let shoe_card of shoe_cards) {
    shoe_card.style.display = "block";
  }
  for (let watch_card of watch_cards) {
    watch_card.style.display = "block";
  }
  for (let other_card of other_cards) {
    other_card.style.display = "block";
  }
  this.classList.add("active");
  cloth_btn.classList.remove("active");
  shoe_btn.classList.remove("active");
  watch_btn.classList.remove("active");
  other_btn.classList.remove("active");
};

cloth_btn.onclick = function () {
  for (let cloth_card of cloth_cards) {
    cloth_card.style.display = "block";
  }
  for (let shoe_card of shoe_cards) {
    shoe_card.style.display = "none";
  }
  for (let watch_card of watch_cards) {
    watch_card.style.display = "none";
  }
  for (let other_card of other_cards) {
    other_card.style.display = "none";
  }
  this.classList.add("active");
  all_btn.classList.remove("active");
  shoe_btn.classList.remove("active");
  watch_btn.classList.remove("active");
  other_btn.classList.remove("active");
};

shoe_btn.onclick = function () {
  for (let shoe_card of shoe_cards) {
    shoe_card.style.display = "block";
  }
  for (let cloth_card of cloth_cards) {
    cloth_card.style.display = "none";
  }
  for (let watch_card of watch_cards) {
    watch_card.style.display = "none";
  }
  for (let other_card of other_cards) {
    other_card.style.display = "none";
  }
  this.classList.add("active");
  cloth_btn.classList.remove("active");
  all_btn.classList.remove("active");
  watch_btn.classList.remove("active");
  other_btn.classList.remove("active");
};

watch_btn.onclick = function () {
  for (let watch_card of watch_cards) {
    watch_card.style.display = "block";
  }
  for (let shoe_card of shoe_cards) {
    shoe_card.style.display = "none";
  }
  for (let cloth_card of cloth_cards) {
    cloth_card.style.display = "none";
  }
  for (let other_card of other_cards) {
    other_card.style.display = "none";
  }
  this.classList.add("active");
  cloth_btn.classList.remove("active");
  shoe_btn.classList.remove("active");
  all_btn.classList.remove("active");
  other_btn.classList.remove("active");
};

other_btn.onclick = function () {
  for (let other_card of other_cards) {
    other_card.style.display = "block";
  }
  for (let watch_card of watch_cards) {
    watch_card.style.display = "none";
  }
  for (let shoe_card of shoe_cards) {
    shoe_card.style.display = "none";
  }
  for (let cloth_card of cloth_cards) {
    cloth_card.style.display = "none";
  }
  this.classList.add("active");
  cloth_btn.classList.remove("active");
  shoe_btn.classList.remove("active");
  watch_btn.classList.remove("active");
  all_btn.classList.remove("active");
};
