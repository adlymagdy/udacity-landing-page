/**
 * Define Global Variables
 *
 */
let navbar_list = document.querySelector("#navbar__list");
let sections = document.querySelectorAll("main > section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
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
    let section_title = section_content.querySelector('h2').textContent;
    let list_item = document.createElement('li');
    list_item.innerHTML = `<a href=#${section.id}>${section_title}</a>`;

    // list_item.classList.add("menu__link")
    navbar_list.appendChild(list_item);
  }
}


// Add class 'active' to section when near top of viewport

function addActive (section) {
  document.addEventListener('scroll', function () {
    if(isInViewport(section)) {
      section.classList.add("your-active-class")
    } else {
      section.classList.remove("your-active-class")
    }
  })
}

for (let section of sections) {
  buildNav(section); // Build menu
  addActive(section); // Set sections as active
}

// Scroll to anchor ID using scrollTO event
let navbar_items = document.querySelectorAll("#navbar__list a");

for (let navItem of navbar_items) {
  navItem.addEventListener("click", smoothScroll)
}

function smoothScroll (ev) {
  ev.preventDefault();
  const target = ev.currentTarget.getAttribute("href");
  window.scrollTo({
    top: document.querySelector(target).offsetTop,
    behavior: "smooth"
  })
}

