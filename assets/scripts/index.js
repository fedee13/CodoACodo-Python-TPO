const navbarLinks = [
  {
    text: "Películas",
    link: "/",
  },
  {
    text: "Contacto",
    link: "/contact.html",
  },
];
document.querySelector(".navbar").insertAdjacentHTML(
  "afterbegin",
  `<nav>
    <label id="navToggle" for="navbar-toggle" class="menu-burger ml-20">
        <i class="fa fa-bars fa-2x"></i>
      </label>
      <ul class="menu-left">
        ${navbarLinks.map((link) => `<li><a href="${link.link}">${link.text}</a></li>`).join("")}
      </ul>
      <a href="/" class="logo">
        <img class="img-responsive" src="./assets/img/codo-a-codo.png" alt="Codo a Codo">
        <span>Movies database</span>
      </a>
    </nav>`
);

document
  .getElementById("footer")
  .insertAdjacentHTML(
    "afterbegin",
    '<p><a href="https://github.com/fedee13" target="_blank"><i class="fa fa-github"></i> Federico Pandullo</a></p>'
  );

document
  .getElementById("navToggle")
  .addEventListener("click", function (event) {
    const toggler = document.querySelector("#navToggle");
    const togglerClasses = toggler.classList;
    togglerClasses.toggle("collapsed");
  });
