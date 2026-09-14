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

// start button scroll up

document.addEventListener("DOMContentLoaded", () => {
  const butScroll = document.getElementById("scroll");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      butScroll.style.display = "flex";
      butScroll.style.opacity = "1";
      butScroll.style.transform = "scale(1)";
    } else {
      butScroll.style.opacity = "0";
      butScroll.style.transform = "scale(0.9)";
      setTimeout(() => {
        butScroll.style.display = "none";
      }, 300);
    }
  });

  butScroll.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// end button scroll up

// start gifts

let giftsData = [];

function getCategoryClass(category) {
  if (category === "For Work") return "work";
  if (category === "For Health") return "health";
  return "harmony";
}

function getCategoryImage(category) {
  if (category === "For Work") return "./assets/gift-for-work.png";
  if (category === "For Health") return "./assets/gift-for-health.png";
  return "./assets/gift-for-harmony.png";
}

function getCategoryColor(category) {
  if (category === "For Work") return "#4361FF";
  if (category === "For Health") return "#06A44F";
  return "#FF43F7";
}

function renderCards() {
  const container = document.querySelector(".gifts_allCard");
  container.innerHTML = "";

  const dataToRender = currentFilterCategory
    ? giftsData.filter(function (gift) {
        return gift.category === currentFilterCategory;
      })
    : giftsData;

  const itemsToShow = isFilterActive
    ? dataToRender.length
    : Math.min(dataToRender.length, currentPage * PAGE_SIZE);

  for (let i = 0; i < itemsToShow; i++) {
    const gift = dataToRender[i];
    const categoryClass = getCategoryClass(gift.category);
    const imgSrc = getCategoryImage(gift.category);

    const card = document.createElement("a");
    card.className = "gifts_card " + categoryClass;

    card.innerHTML =
      '<div class="image_cont">' +
      '<img class="img_gifts" src="' +
      imgSrc +
      '" alt="image gift" />' +
      "</div>" +
      '<div class="card_text">' +
      '<h4 class="category">' +
      gift.category +
      "</h4>" +
      '<p class="name">' +
      gift.name +
      "</p>" +
      "</div>";

    container.appendChild(card);
  }

  const cat = document.querySelectorAll(".category");
  for (let i of cat) {
    i.style.color = getCategoryColor(i.textContent);
  }

  updateShowMoreButton();
}

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

// start pagination

const PAGE_SIZE = 12;
let currentPage = 1;
let isFilterActive = false;
let currentFilterCategory = null;

function updateShowMoreButton() {
  const btn = document.querySelector(".show_more_btn");
  if (!btn) return;

  if (isFilterActive) {
    btn.classList.add("hidden");
    return;
  }

  btn.classList.remove("hidden");

  const visibleItems = Math.min(giftsData.length, currentPage * PAGE_SIZE);

  if (visibleItems >= giftsData.length) {
    btn.disabled = true;
  } else {
    btn.disabled = false;
  }
}

// end pagination

// start sort

const but_all = document.querySelector(".tab_1");
const but_work_tab = document.querySelector(".tab_2");
const but_health_tab = document.querySelector(".tab_3");
const but_harmony_tab = document.querySelector(".tab_4");

but_all.addEventListener("click", function () {
  but_all.classList.add("active");
  but_work_tab.classList.remove("active");
  but_health_tab.classList.remove("active");
  but_harmony_tab.classList.remove("active");

  isFilterActive = false;
  currentFilterCategory = null;
  currentPage = 1;
  renderCards();
});

but_work_tab.addEventListener("click", function () {
  but_work_tab.classList.add("active");
  but_health_tab.classList.remove("active");
  but_harmony_tab.classList.remove("active");
  but_all.classList.remove("active");

  isFilterActive = true;
  currentFilterCategory = "For Work";
  currentPage = 1;
  renderCards();
});

but_health_tab.addEventListener("click", function () {
  but_health_tab.classList.add("active");
  but_work_tab.classList.remove("active");
  but_harmony_tab.classList.remove("active");
  but_all.classList.remove("active");

  isFilterActive = true;
  currentFilterCategory = "For Health";
  currentPage = 1;
  renderCards();
});

but_harmony_tab.addEventListener("click", function () {
  but_harmony_tab.classList.add("active");
  but_work_tab.classList.remove("active");
  but_health_tab.classList.remove("active");
  but_all.classList.remove("active");

  isFilterActive = true;
  currentFilterCategory = "For Harmony";
  currentPage = 1;
  renderCards();
});

// end sort

// start show more

document.querySelector(".show_more_btn").addEventListener("click", function () {
  currentPage++;
  renderCards();
});

// end show more

//module window
const modal = document.querySelector(".modal");
const giftsContainer = document.querySelector(".gifts_allCard");
const close = document.querySelector(".close");
const categoryMod = document.querySelector(".category_mod");
const nameMod = document.querySelector(".name_mod");
const descriptionMod = document.querySelector(".description_mod");
const imageContMod = document.querySelector(".image_cont_mod");
const charMods = document.querySelectorAll(".char_mod");
const snowFlakes = document.querySelectorAll(".snowFlake");

fetch("./data/gifts.json")
  .then((response) => response.json())
  .then((data) => {
    giftsData = data;
    renderCards();
    initSnowflakes();
  })
  .catch((error) => {
    console.error("gifts.json:", error);
  });

giftsContainer.addEventListener("click", function (event) {
  const card = event.target.closest(".gifts_card");
  if (!card) return;

  const cardName = card.querySelector(".name").textContent.trim();
  const gift = giftsData.find((g) => g.name === cardName);

  if (gift) {
    categoryMod.textContent = gift.category;
    categoryMod.style.color = getCategoryColor(gift.category);
    nameMod.textContent = gift.name;
    descriptionMod.textContent = gift.description;

    imageContMod.innerHTML =
      '<img class="img_gifts" src="' +
      getCategoryImage(gift.category) +
      '" alt="image gift" />';

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
});

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
