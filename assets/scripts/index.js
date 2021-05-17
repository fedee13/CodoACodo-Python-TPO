document.addEventListener("DOMContentLoaded", function (event) {
  document
    .getElementById("navToggle")
    .addEventListener("click", function (event) {
      const toggler = document.querySelector("#navToggle");
      const togglerClasses = toggler.classList;
      togglerClasses.toggle("collapsed");
    });
});
