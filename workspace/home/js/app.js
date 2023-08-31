/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/
//Tabs made for the each and any potential section us a for of loop
//Created using an unordered list having the data-nav attribute value as the 
//innerHTML, also added the class menu___Link for styling purposes
// build the nav
let nav_container = document.querySelector("#navbar__list")
let nav_tabs = document.querySelectorAll("section")
for (let tab of nav_tabs) {

   let section = document.createElement('li')
   section.textContent = tab.getAttribute("data-nav")
   nav_container.appendChild(section)
   section.classList.add("menu__link")
}


//Figured out the dimensions of the tab using getBoundingClientRect(),
//Created variable isFocused to determine location compared to window
//Using an eventListener, a forEach loop, and an if/else statement
//made that section (variable nav_tabs) active by adding class="your-active-class"
//or not active by removing class="your-active-class"

// Add class 'active' to section when near top of viewport

const links = document.querySelectorAll(".menu__link")


const isInViewPort = function(tab) {
   const bounds = tab.getBoundingClientRect();
   console.log("bounds: " + bounds)
   let isFocused = (
    bounds.top >= 0 &&
    bounds.left > 0 &&
    bounds.right <= window.innerWidth &&
    bounds.bottom <= window.innerHeight
 )
      return isFocused;
};

window.addEventListener("scroll", function(event) {
   nav_tabs.forEach(function(tab) {      
      if (isInViewPort(tab)) {
      tab.classList.add("your-active-class");
      links.forEach(link => {
         if(link.textContent.includes(`${tab.getAttribute("data-nav")}`)) {
            link.style.color = "purple"
         }
      })
      } else {
      tab.classList.remove("your-active-class");
      links.forEach(link => {
         if(link.textContent.includes(`${tab.getAttribute("data-nav")}`)) {
            link.style.color = "black"
         }
      })
   };
})
});



//Created a variable links that consists of NodeList of all tags containing
//class = "menu__Link". Ran those individual links through a forEach loop.
//The forEachloop ran through an eventListner that first prevent the default 
//action of the scrollIntoView method. Created a variable view that target the 
// text content of the click target, the used the variable view in to 
//getElementByID method so it could scroll to the element tag with the
//element id = "Section ?" Made apprioriate modifications to the view variable to 
//ensure proper id was scrolling into view.
// Scroll to anchor ID using scrollTO event


links.forEach((link) => {
   link.addEventListener("click", (event) => {
      event.preventDefault();
      const view = event.target.textContent;
document.getElementById(view.replace(" ", "").toLowerCase()).scrollIntoView({behavior: "smooth"});
   });
})


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

