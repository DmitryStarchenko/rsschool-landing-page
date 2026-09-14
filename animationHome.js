// start burger menu

const burger = document.querySelector(".burger_button");
const menu = document.querySelector(".navigation");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
  body.classList.toggle("lock");
});

document.querySelectorAll(".press").forEach((item) =>
  item.addEventListener("click", () => {
    burger.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("lock");
  }),
);

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    burger.classList.remove("active");
    menu.classList.remove("active");
    body.classList.remove("lock");
  }
});

// end burger menu

// start timer

document.addEventListener("DOMContentLoaded", function () {
  const deadline = new Date(2026, 0, 1);
  let timerId = null;

  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    day.textContent = days;
    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;
  }

  const day = document.querySelector(".timer_day");
  const hour = document.querySelector(".timer_hours");
  const minute = document.querySelector(".timer_minutes");
  const second = document.querySelector(".timer_seconds");

  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
});

// end timer

// start slider

document.addEventListener("DOMContentLoaded", () => {
  const row = document.querySelector(".row");
  const slider = document.querySelector(".slider");
  const butLeft = document.querySelector(".but_left");
  const butRight = document.querySelector(".but_right");
  const maxOffset = slider.scrollWidth - row.offsetWidth;
  const step = 275;

  let currentOffset = 0;

  const updateButtons = () => {
    butLeft.disabled = currentOffset === 0;
    butRight.disabled = currentOffset >= maxOffset;
  };

  const moveSlider = () => {
    slider.style.transform = "translateX(-" + currentOffset + "px)";
  };

  butLeft.addEventListener("click", () => {
    if (currentOffset > 0) {
      currentOffset = Math.max(0, currentOffset - step);
      moveSlider();
      updateButtons();
    }
  });

  butRight.addEventListener("click", () => {
    if (currentOffset < maxOffset) {
      currentOffset = Math.min(maxOffset, currentOffset + step);
      moveSlider();
      updateButtons();
    }
  });

  window.addEventListener("resize", () => {
    slider.style.transform = "translateX(0)";
    currentOffset = 0;
    updateButtons();
  });

  updateButtons();
});

// end slider

// start color category
const cat = document.querySelectorAll(".category");
for (let i of cat) {
  if (i.textContent === "For Work") {
    i.style.color = "#4361FF";
  } else if (i.textContent === "For Health") {
    i.style.color = "#06A44F";
  } else {
    i.style.color = "#FF43F7";
  }
}
// end color category

function initSnowflakes() {
  const snowFlakeContainers = document.querySelectorAll(".snowFlake");
  snowFlakeContainers.forEach(function (container) {
    container.innerHTML = "";
    for (let i = 0; i < 5; i++) {
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "14");
      svg.setAttribute("height", "16");
      svg.setAttribute("viewBox", "0 0 14 16");
      svg.setAttribute("fill", "none");
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path",
      );
      path.setAttribute(
        "d",
        "M11.1959 9.88162L10.6482 9.56542L12.1158 9.17219L11.8732 8.26704L9.50055 8.90278L8.38146 8.25667C8.39689 8.17336 8.40538 8.08765 8.40538 7.99997C8.40538 7.91229 8.39692 7.82655 8.38146 7.74327L9.50055 7.09716L11.8732 7.7329L12.1158 6.82775L10.6482 6.43452L11.1959 6.11831L13.546 5.97725L13.8921 4.02063L12.0246 3.34203L10.7274 5.30677L10.1797 5.62297L10.5729 4.15545L9.66778 3.91293L9.03204 6.28561L7.91226 6.93211C7.78247 6.82103 7.63242 6.73313 7.4683 6.67494V5.3828L9.20521 3.64586L8.5426 2.98325L7.46827 4.05755V3.42515L8.51792 1.32584L6.99976 0L5.48157 1.3259L6.53122 3.42521V4.05761L5.45689 2.98332L4.79429 3.64592L6.53119 5.38286V6.675C6.36708 6.73319 6.21702 6.82109 6.08724 6.93217L4.96746 6.28568L4.33171 3.91299L3.42656 4.15551L3.81979 5.62304L3.27213 5.30684L1.9749 3.34209L0.107422 4.02069L0.453485 5.97731L2.80362 6.11838L3.35128 6.43458L1.88375 6.82781L2.1263 7.73296L4.49898 7.09722L5.61807 7.74333C5.60264 7.82664 5.59414 7.91235 5.59414 8.00003C5.59414 8.08771 5.60261 8.17345 5.61807 8.25673L4.49898 8.90285L2.1263 8.2671L1.88375 9.17226L3.35128 9.56548L2.80362 9.88169L0.453485 10.0227L0.107422 11.9793L1.97493 12.6579L3.27216 10.6932L3.81985 10.377L3.42662 11.8445L4.33177 12.087L4.96752 9.71435L6.0873 9.06786C6.21708 9.17894 6.36714 9.26684 6.53125 9.32503V10.6172L4.79435 12.3541L5.45696 13.0167L6.53129 11.9424V12.5748L5.48163 14.6741L6.99983 16L8.51802 14.6741L7.46837 12.5748V11.9424L8.5427 13.0167L9.2053 12.3541L7.4684 10.6172V9.32503C7.63251 9.26684 7.78257 9.17894 7.91235 9.06786L9.03213 9.71435L9.66788 12.087L10.573 11.8445L10.1798 10.377L10.7275 10.6932L12.0247 12.6579L13.8922 11.9793L13.5462 10.0227L11.1959 9.88162Z",
      );
      path.setAttribute("fill", "#FF4646");
      path.setAttribute("fill-opacity", "0.1");
      svg.appendChild(path);
      container.appendChild(svg);
    }
  });
}

//modal
const modal = document.querySelector(".modal");
const btn = document.querySelectorAll(".gifts_card");
const close = document.querySelector(".close");
const categoryMod = document.querySelector(".category_mod");
const nameMod = document.querySelector(".name_mod");
const descriptionMod = document.querySelector(".description_mod");
const imageContMod = document.querySelector(".image_cont_mod");
const charMods = document.querySelectorAll(".char_mod");
const snowFlakes = document.querySelectorAll(".snowFlake");

let giftsData = [];

fetch("./gifts.json")
  .then((response) => response.json())
  .then((data) => {
    giftsData = data;
    initSnowflakes();
  })
  .catch((error) => {
    console.error("gifts.json:", error);
  });

for (let i of btn) {
  i.onclick = function () {
    const cardName = this.querySelector(".name").textContent.trim();
    const gift = giftsData.find((g) => g.name === cardName);

    if (gift) {
      categoryMod.textContent = gift.category;

      if (gift.category === "For Work") {
        categoryMod.style.color = "#4361FF";
      } else if (gift.category === "For Health") {
        categoryMod.style.color = "#06A44F";
      } else if (gift.category === "For Harmony") {
        categoryMod.style.color = "#FF43F7";
      }

      nameMod.textContent = gift.name;

      descriptionMod.textContent = gift.description;

      let imgSrc = "./img-compressed/gift-for-work.png";
      if (gift.category === "For Work") {
        imgSrc = "./img-compressed/gift-for-work.png";
      } else if (gift.category === "For Health") {
        imgSrc = "./img-compressed/gift-for-health.png";
      } else if (gift.category === "For Harmony") {
        imgSrc = "./img-compressed/gift-for-harmony.png";
      }
      imageContMod.innerHTML =
        '<img class="img_gifts" src="' + imgSrc + '" alt="image gift" />';

      const powers = gift.superpowers;
      const powerKeys = ["live", "create", "love", "dream"];

      powerKeys.forEach(function (key, index) {
        if (charMods[index]) {
          charMods[index].textContent = powers[key];
        }
      });

      powerKeys.forEach(function (key, index) {
        const value = parseInt(powers[key].replace("+", ""));
        const activeCount = value / 100;
        if (snowFlakes[index]) {
          const svgs = snowFlakes[index].querySelectorAll("svg");
          svgs.forEach(function (svg, svgIdx) {
            const path = svg.querySelector("path");
            if (path) {
              if (svgIdx < activeCount) {
                path.setAttribute("fill-opacity", "1");
              } else {
                path.setAttribute("fill-opacity", "0.1");
              }
            }
          });
        }
      });
    }

    modal.style.opacity = 1;
    modal.style.visibility = "visible";
    body.classList.toggle("lock");
  };
}

close.onclick = function () {
  modal.style.opacity = 0;
  modal.style.visibility = "hidden";
  body.classList.remove("lock");
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.opacity = 0;
    modal.style.visibility = "hidden";
    body.classList.remove("lock");
  }
};
