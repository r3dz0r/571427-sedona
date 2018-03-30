var toggleButton = document.querySelector(".search__popup");
var modalSearch = document.querySelector(".search__form");

if(toggleButton) {
  toggleButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalSearch.classList.toggle("search__form--close");
  });
}
