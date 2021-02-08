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

// Scroll to anchor ID using scrollTO event



for (let section of sections) {
  buildNav(section);
  addActive(section);
}