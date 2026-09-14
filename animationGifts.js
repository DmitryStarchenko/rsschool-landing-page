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

// start sort

const but_all = document.querySelector(".tab_1");
const but_work = document.querySelector(".tab_2");
const but_health = document.querySelector(".tab_3");
const but_harmony = document.querySelector(".tab_4");

const card_work = document.querySelectorAll(".work");
const card_health = document.querySelectorAll(".health");
const card_harmony = document.querySelectorAll(".harmony");

but_all.addEventListener("click", () => {
  but_all.classList.add("active");
  but_work.classList.remove("active");
  but_health.classList.remove("active");
  but_harmony.classList.remove("active");
  for (let i of card_harmony) {
    i.classList.remove("active");
  }
  for (let i of card_health) {
    i.classList.remove("active");
  }
  for (let i of card_work) {
    i.classList.remove("active");
  }
});

but_work.addEventListener("click", () => {
  but_work.classList.add("active");
  but_health.classList.remove("active");
  but_harmony.classList.remove("active");
  but_all.classList.remove("active");
  for (let i of card_work) {
    i.classList.remove("active");
  }
  for (let i of card_health) {
    i.classList.add("active");
  }
  for (let i of card_harmony) {
    i.classList.add("active");
  }
});

but_health.addEventListener("click", () => {
  but_health.classList.add("active");
  but_work.classList.remove("active");
  but_harmony.classList.remove("active");
  but_all.classList.remove("active");
  for (let i of card_health) {
    i.classList.remove("active");
  }
  for (let i of card_work) {
    i.classList.add("active");
  }
  for (let i of card_harmony) {
    i.classList.add("active");
  }
});

but_harmony.addEventListener("click", () => {
  but_harmony.classList.add("active");
  but_work.classList.remove("active");
  but_health.classList.remove("active");
  but_all.classList.remove("active");
  for (let i of card_harmony) {
    i.classList.remove("active");
  }
  for (let i of card_health) {
    i.classList.add("active");
  }
  for (let i of card_work) {
    i.classList.add("active");
  }
});

// end sort

//module window
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
