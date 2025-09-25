const toggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
toggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

document.addEventListener("DOMContentLoaded", function () {
  const skillsSection = document.querySelector("#skills");
  const progressBars = document.querySelectorAll(".progress");

  function showProgress() {
    progressBars.forEach((bar) => {
      const target = bar.classList[1];
      switch(target){
        case "html":
             bar.style.width="95%";
         break;
        case "css":
             bar.style.width="90%";
              break;
        case "js":
             bar.style.width="85%"; 
             break;
        case "react":
             bar.style.width="80%";
              break;
        case "bootstrap":
             bar.style.width="85%";
              break;
        case "mui": 
        bar.style.width="80%";
         break;
        case "tailwind":
             bar.style.width="75%";
              break;
        case "figma": 
        bar.style.width="85%";
         break;
        case "responsive": 
        bar.style.width="90%";
         break;
        case "git":
             bar.style.width="80%";
              break;
      }
    });
  }

  function hideProgress() {
    progressBars.forEach((bar) => bar.style.width="0");
  }

  window.addEventListener("scroll", () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    if(sectionPos < screenPos) showProgress();
    else hideProgress();
  });
});
