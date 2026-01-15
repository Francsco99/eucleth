document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "assets/images/01.jpg",
    "assets/images/02.jpg",
    "assets/images/03.jpg",
    "assets/images/04.jpg",
    "assets/images/05.jpg",
    "assets/images/06.jpg",
    "assets/images/07.jpg",
    "assets/images/08.jpg",
    "assets/images/09.jpg",
    "assets/images/10.jpg",
    "assets/images/11.jpg"
  ];

  const slides = document.getElementById("slides");

    images.forEach(src => {
      const slide = document.createElement("div");
      slide.className = "swiper-slide";

      const img = document.createElement("img");
      img.src = src;
      img.loading = "lazy";

      slide.appendChild(img);
      slides.appendChild(slide);
    });

    new Swiper(".swiper", {
      loop: true,
      speed: 1200,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false
      },
      allowTouchMove: false,
      effect: "slide"
    });
  });