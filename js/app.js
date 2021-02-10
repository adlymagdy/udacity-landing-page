/**
 * Define Global Variables
 *
 */
let navbar_list = document.querySelector("#navbar__list");
let sections = document.querySelectorAll("main > section");
let navbarMenu = document.querySelector(".navbar__menu");
let navbarToggler = document.querySelector(".navbar-toggler");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function isInViewport(el) { // returns true if element is in viewport false otherwise. Courtesy of https://vanillajstoolkit.com/helpers/isinviewport/
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function navbarTogglerClick() { // Displays navbar_list when the menu button is clicked on smaller screens
  navbarToggler.classList.toggle("open-navbar-toggler");
  navbar_list.classList.toggle("open");
}

function navbarLinkClick (ev) {
  smoothScroll(ev); // Calls the smoothScroll function
  if(navbar_list.classList.contains("open")) { // Closes navbar_list in smaller screens
    navbarToggler.click();
  }
}

function hideNavbarOnScroll () { // Hides navbarMenu if user is 300 px from the top of the page
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    navbarMenu.style.top = "-80px";
  } else {
    navbarMenu.style.top = "0";
  }
}


/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build nav
function buildNav(section) {
  if (section.id) {
    let section_content = section.querySelector(".landing__container");
    let section_title = section_content.querySelector("h2").textContent;
    let list_item = document.createElement("li");
    list_item.innerHTML = `<a href=#${section.id}>${section_title}</a>`;

    // list_item.classList.add("menu__link")
    navbar_list.appendChild(list_item);
  }
}


// Add class 'active' to section when near top of viewport
function addActive (section) {
  document.addEventListener("scroll", function () {
    if(isInViewport(section)) {
      section.classList.add("your-active-class")
    } else {
      section.classList.remove("your-active-class")
    }
  })
}

// loops through all sections and call the functions on them
for (let section of sections) {
  buildNav(section); // Build menu
  addActive(section); // Set sections as active
}

// Scroll to anchor ID using scrollTO event
const navbar_items = document.querySelectorAll("#navbar__list a");
for (let navItem of navbar_items) {
  navItem.addEventListener("click", navbarLinkClick)
}
// Enables smooth scrolling when user click on a link
function smoothScroll (ev) {
  ev.preventDefault();
  const target = ev.currentTarget.getAttribute("href");
  window.scrollTo({
    top: document.querySelector(target).offsetTop,
    behavior: "smooth"
  })
}



/**
 * End Main Functions
 * Begin Events
 *
 */


// Scroll to section on link click
navbarToggler.addEventListener("click", navbarTogglerClick);

// Hide navbarMenu when scrolling
window.onscroll = function() {hideNavbarOnScroll()};