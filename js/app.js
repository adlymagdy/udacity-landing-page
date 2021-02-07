/**
 * Define Global Variables
 *
 */

let navbar_list = document.querySelector("#navbar__list");
let sections = document.querySelectorAll("main > section")

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

// build nav

for (let section of sections) {
   if (section.id) {
       let section_content = section.querySelector(".landing__container");
       let section_title = section_content.querySelector('h2').textContent;
       let list_item = document.createElement('li');
       list_item.innerHTML = `<a href=#${section.id}>${section_title}</a>`;
       navbar_list.appendChild(list_item);
   }
}

