/////////////////////////////////// EXCELENCE PAGE FUNCTION ////////////////////////////////////

const counters = document.querySelectorAll(".counter");
const speed = 300; // Slower animation (higher number = slower)

counters.forEach((counter) => {
  const target = +counter.getAttribute("data-target").replace("%", "");
  const isPercentage = counter.getAttribute("data-target").includes("%");

  const animate = () => {
    const count = +counter.innerText.replace(/\D/g, ""); // Remove non-digits
    const increment = target / speed;

    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}${
        isPercentage ? "%" : ""
      } +`;
      setTimeout(animate, 40); // Delay between frames
    } else {
      counter.innerText = `${target}${isPercentage ? "%" : ""} +`;
    }
  };

  animate();
});

/////////////////////////////////// SCROLL TO CONTACT SECTION FUNCTION ////////////////////////////////////

document.addEventListener("DOMContentLoaded", () => {
  const applyBtn = document.getElementById("apply-btn");
  const contactSection = document.getElementById("contact");

  applyBtn.addEventListener("click", () => {
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});

/////////////////////////////////// SCROLL TO TOP BUTTON FUNCTION ////////////////////////////////////

// Wait until the DOM is fully loaded [This is not working in the current context]
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-menu a");

  window.addEventListener("scroll", () => {
    let scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute("id");

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${sectionId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  });
});
