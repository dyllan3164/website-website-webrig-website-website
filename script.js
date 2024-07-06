function changeText() {
  var replaceText = document.getElementsByClassName("mini-text");
  replaceText[0].innerHTML = "Scroll down";

  document.getElementById("icon-up").style.display = "none";
  document.getElementById("icon-down").style.display = "block";

  var iconUp = document.getElementsByClassName("icon-up")[0];

  iconUp.onclick = function () {
    var button = document.getElementsByClassName("icon-down");
    button.style.display = "block";
  };
}
/* --------------------------- Meeting 11 | Button Like Dislike ------------------------- */
var btnLike = document.querySelector("#green");
var btnDislike = document.querySelector("#red");

if (btnLike) {
  btnLike.onclick = likeColor;
}
if (btnDislike) {
  btnDislike.onclick = dislikeColor;
}

function likeColor() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}

function dislikeColor() {
  document.body.style.backgroundColor = "white";
  document.body.style.color = "black";
}

function likeColor() {
  if (btnDislike.classList.contains("red")) {
    btnDislike.classList.remove("red");
  }

  this.classList.toggle("green");
}

function dislikeColor() {
  if (btnLike.classList.contains("green")) {
    btnLike.classList.remove("green");
  }

  this.classList.toggle("red");
}

function changeImage(element) {
  element.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUJdLUWBVhABZ_yVbSOLyIcWr35aZkc9_rHA&s"
  );
}

function changeImageBack(element) {
  element.setAttribute(
    "src",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQamjRRY_6ila-Dan_KZt0NREHb_pUw71DFmg&s"
  );
}

function changeText(text) {
  text.innerHTML = "ril";
}

function changeTextBack(text) {
  text.innerHTML = "Get Programming Tips Here!";
}

var myList = document.getElementsByTagName("li");
var i;
for (i = 0; i < myList.length; i++) {
  var span = document.createElement("span");
  span.innerHTML = "x";
  myList[i].appendChild(span).setAttribute("class", "close");
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

function newElement() {
  // Create new list with the inputed value
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  // Check the inputed value
  if (inputValue === "" || inputValue === "") {
    alert("Data tidak boleh kosong!");
  } else {
    document
      .getElementById("myUL")
      .appendChild(li)
      .setAttribute("class", "search-tags-item");
    li.innerHTML = inputValue;
  }
  // Clear text on the search bar
  document.getElementById("myInput").value = "";
  // Create button close
  var span = document.createElement("SPAN");
  span.innerHTML = "x";
  li.appendChild(span).setAttribute("class", "close");
  // Delete list
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
var slides = document.querySelectorAll(".slide");
var buttons = document.querySelectorAll(".slider-btn");
let currentSlide = 1;
//Manual images slider
var manualNav = function (manual) {
  slides.forEach(function (slide) {
    slide.classList.remove("active");
    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });
  });
  slides[manual].classList.add("active");
  buttons[manual].classList.add("active");
};
buttons.forEach(function (btn, i) {
  btn.addEventListener("click", function () {
    manualNav(i);
    currentSlide = i;
  });
});

var repeat = function () {
  let active = document.getElementsByClassName("active");
  let i = 1;
  var repeater = function () {
    setTimeout(function () {
      [...active].forEach(function (activeSlide) {
        activeSlide.classList.remove("active");
      });
      slides[i].classList.add("active");
      buttons[i].classList.add("active");
      i++;
      if (slides.length == i) {
        i = 0;
      }
      if (i >= slides.length) {
        return;
      }
      repeater();
    }, 10000);
  };
  repeater();
};
repeat();

var codingProjects = document.querySelectorAll(".project-description");
codingProjects.forEach((project, index) => {
  project.dataset.aos = "fade-down";
  project.dataset.aosDuration = 1500;
  project.dataset.aosDelay = index * 300;
});
AOS.init({
  once: true,
});

var btnSubmit = document.querySelector(".submit");
var modal = document.querySelector(".modal-container");
if (btnSubmit) {
  btnSubmit.addEventListener("click", function () {
    modal.classList.add("show");
    const next = document.querySelector(".next");
    next.setAttribute(
      "value",
      "https://website-website-webrig-website-website-frz9m9p5g.vercel.app/contact.html"
    );
  });
}

var splash = document.querySelector(".splash");
if (splash) {
  document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(function () {
      splash.style.display = "none";
    }, 3000);
  });
}

var animate = document.querySelector(".astronaut-takeoff");
if (animate) {
  document.addEventListener("DOMContentLoaded", function (event) {
    setTimeout(function () {
      animate.classList.add("animation");
    }, 400);
  });
}

var splashText = document.querySelector(".splash-text");
if (splashText) {
  setTimeout(function () {
    splashText.innerHTML = "Come in!";
  }, 2000);
}
