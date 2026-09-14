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
    slider.style.transform = `translateX(-${currentOffset}px)`;
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
  })
  .catch((error) => {
    console.error("Ошибка загрузки gifts.json:", error);
  });

for (let i of btn) {
  i.onclick = function () {
    const cardName = this.querySelector(".name").textContent.trim();
    const gift = giftsData.find((g) => g.name === cardName);

    if (gift) {
      categoryMod.textContent = gift.category;

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
