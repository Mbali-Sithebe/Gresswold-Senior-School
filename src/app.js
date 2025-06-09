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
