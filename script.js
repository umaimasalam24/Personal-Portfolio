// // ========= Contact Form =========
// const contactForm = document.querySelector("#contact-form");
// if (contactForm) {
//   contactForm.addEventListener("submit", e => {
//     e.preventDefault();
//     alert("Thank you! Your message has been sent ✅");
//     contactForm.reset();
//   });
// }

// // ========== NAVBAR TOGGLE (for mobile) ==========
// const navMenu = document.querySelector(".nav-menu");
// const navToggle = document.createElement("div");
// navToggle.classList.add("nav-toggle");
// navToggle.innerHTML = "☰"; // hamburger menu icon
// document.querySelector(".navbar").appendChild(navToggle);

// navToggle.addEventListener("click", () => {
//   navMenu.classList.toggle("active");
//   navToggle.innerHTML = navMenu.classList.contains("active") ? "✖" : "☰";
// });

// // Close menu on link click
// document.querySelectorAll(".nav-menu a").forEach(link => {
//   link.addEventListener("click", () => {
//     navMenu.classList.remove("active");
//     navToggle.innerHTML = "☰";
//   });
// });


// // ========== SMOOTH SCROLL ==========
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth"
//     });
//   });
// });


// // ========== DARK/LIGHT THEME TOGGLE ==========
// const themeToggle = document.createElement("p");
// themeToggle.classList.add("theme-btn");
// themeToggle.textContent = localStorage.getItem("theme") === "dark" ? "🌞" : "🌙";
// document.querySelector(".navbar").appendChild(themeToggle);

// // Apply saved theme
// if (localStorage.getItem("theme") === "dark") {
//   document.body.classList.add("dark");
// }

// themeToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark");

//   if (document.body.classList.contains("dark")) {
//     themeToggle.textContent = "🌞";
//     localStorage.setItem("theme", "dark");
//   } else {
//     themeToggle.textContent = "🌙";
//     localStorage.setItem("theme", "light");
//   }
// });


// // ========== TESTIMONIAL SLIDER ==========
// let currentTestimonial = 0;
// const testimonials = document.querySelectorAll(".testimonial");

// function showTestimonial(index) {
//   testimonials.forEach((testimonial, i) => {
//     testimonial.style.display = i === index ? "block" : "none";
//   });
// }

// function nextTestimonial() {
//   currentTestimonial = (currentTestimonial + 1) % testimonials.length;
//   showTestimonial(currentTestimonial);
// }

// // Auto-slide every 5s
// showTestimonial(currentTestimonial);
// setInterval(nextTestimonial, 5000);


// ========== CONTACT FORM (demo only) ==========
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  alert("✅ Thank you! Your message has been sent.");
  contactForm.reset();
});

