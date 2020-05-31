let navbar = document.getElementById("nav");
window.onscroll = function () {
   "use strict";
   if (
      document.body.scrollTop >= 180 ||
      document.documentElement.scrollTop >= 180
   ) {
      navbar.classList.add("nav-colored");
      navbar.classList.remove("nav-transparent");
   } else {
      navbar.classList.add("nav-transparent");
      navbar.classList.remove("nav-colored");
   }
};
