document.addEventListener("DOMContentLoaded", () => {
    "use strict";

    const tabButtons = document.querySelectorAll(".tab-nav");
    const tabs = document.querySelectorAll(".ul-tab");

    if (tabButtons) {
        tabButtons.forEach(button => {
            button.addEventListener("click", () => {
                const tabId = button.getAttribute("data-tab");

                tabs.forEach(tab => {
                    if (tab.id === tabId) {
                        tab.classList.add("active");
                    } else {
                        tab.classList.remove("active");
                    }
                });

                tabButtons.forEach(btn => {
                    btn.classList.remove("active");
                });
                button.classList.add("active");
            });
        });
    };
});

// ...existing código de tabs...

function changeTestimonialImg() {
  var img = document.querySelector('.ul-testimonial-img img');
  if (img) {
    if (window.innerWidth <= 991) {
      img.src = 'assets/img/familia2.jpg';
    } else {
      img.src = 'assets/img/familia.jpg';
    }
  }
}
window.addEventListener('resize', changeTestimonialImg);
window.addEventListener('DOMContentLoaded', changeTestimonialImg);