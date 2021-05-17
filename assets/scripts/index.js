document.addEventListener("DOMContentLoaded", function (event) {
  document
    .getElementById("navToggle")
    .addEventListener("click", function (event) {
      const toggler = document.querySelector("#navToggle");
      const togglerClasses = toggler.classList;
      togglerClasses.toggle("collapsed");
    });

  document
    .getElementById("footer")
    .insertAdjacentHTML(
      "afterbegin",
      '<p><a href="https://github.com/fedee13" target="_blank"><i class="fa fa-github"></i> Federico Pandullo</a></p>'
    );
});
