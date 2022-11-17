let btnFilter = document.querySelectorAll(".du_an_item");
let itemFilter = document.querySelectorAll(".du_an_card");

function activeFilter() {
  btnFilter.forEach((e) => e.classList.remove("active_du_an"));
  this.classList.add("active_du_an");
}

itemFilter.forEach((c) => {
  let filter = c.getAttribute("data-item");
  c.classList.remove("show");
  c.classList.add("hide");
  if (filter == "ben-vung") {
    c.classList.remove("hide");
    c.classList.add("show");
  }
});

btnFilter.forEach((b) => {
  b.addEventListener("click", function () {
    // Active Btn
    btnFilter.forEach((btn) => {
      btn.classList.remove("active_du_an");
      this.classList.add("active_du_an");
    });

    // Filter Data
    let dataFilter = this.getAttribute("data-filter");

    itemFilter.forEach((item) => {
      item.classList.remove("show");
      item.classList.add("hide");
      if (item.getAttribute("data-item") == dataFilter) {
        item.classList.remove("hide");
        item.classList.add("show");
      }
    });
  });
});

// Slider
$(document).ready(function () {
  $(".slider1").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".prev"),
    nextArrow: $(".next"),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  $(".slider2").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $(".prev-2"),
    nextArrow: $(".next-2"),
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

let swiper = new Swiper(".swiper", {
  spaceBetween: 24,
  // loop: true,
  gradCursor: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1300: {
      slidesPerView: 3,
    },
    1250: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
  },
});
