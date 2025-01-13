var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true,
});



document.addEventListener("DOMContentLoaded", () => {
    const scrollContainers = document.querySelectorAll(".scroll-content");
  
    scrollContainers.forEach((container) => {
      let isScrollingDown = true;
  
      setInterval(() => {
        if (isScrollingDown) {
          container.scrollTop += 1; // Scroll down
          if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
            isScrollingDown = false; // Reverse direction
          }
        } else {
          container.scrollTop -= 1; // Scroll up
          if (container.scrollTop <= 0) {
            isScrollingDown = true; // Reverse direction
          }
        }
      }, 50); // Adjust speed (lower value = faster)
    });
  });

  



  // Function to check if an element is in the viewport
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// Function to add animation class when elements are in the viewport
function animateOnScroll() {
  const boxes = document.querySelectorAll('.education .box');
  boxes.forEach(box => {
      if (isInViewport(box)) {
          box.classList.add('visible');
          // Add right class to alternate boxes for sliding from right
          if (box.offsetLeft % 2 === 0) {
              box.classList.add('right');
          }
      }
  });
}

// Listen for scroll events
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); // Also check on page load




document.addEventListener("DOMContentLoaded", () => {
    // Select all project boxes
    const projectBoxes = document.querySelectorAll(".projects .box");
  
    projectBoxes.forEach((box) => {
      // Add click event listener to each box
      box.addEventListener("click", () => {
        const githubLink = box.getAttribute("data-link");
        if (githubLink) {
          window.open(githubLink, "_blank"); // Open GitHub link in a new tab
        }
      });
    });
  });
  
  