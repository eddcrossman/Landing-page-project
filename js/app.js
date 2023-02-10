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
const sectionElements = document.getElementsByTagName('section');
const navbarList = document.getElementById('navbar__list');


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

// build the nav

function buildNav() {
    const documentFragment = document.createDocumentFragment();

    for (let i of sectionElements){
        const newListItem = document.createElement('LI');        

        newListItem.innerHTML = `<a href='#${i.id}' class='menu__link'>${i.dataset.nav}</a>`;
        documentFragment.append(newListItem);
    }
    navbarList.appendChild(documentFragment);
}

// buildNav();

// Add class 'active' to section when near top of viewport
function addClassToActiveSection(){
    let closestDistance;
    let closestElement;
    
    for (let i of sectionElements){
        let currentDistance = i.getBoundingClientRect().top;
        if (closestDistance === undefined || currentDistance < Math.abs(closestDistance)) {
            closestDistance = currentDistance;
            closestElement = i;
        }

        i.classList.remove('active__section');
    }

    closestElement.classList.add('active__section');
}

// Scroll to anchor ID using scrollTO event
function scrollToSection(targetElement){
    console.log(targetElement);
    targetElement.scrollIntoView({behavior:'smooth'});
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
document.addEventListener('DOMContentLoaded', ()=> {
    console.log(`DOM loaded, building the NAV`);
    buildNav();
});

// Scroll to section on link click
document.addEventListener('click', (event)=> {
    const elementClicked = event.target;

    if (event.target.classList.contains('menu__link') === true){
        event.preventDefault();
        scrollToSection(document.querySelector(elementClicked.attributes.href.nodeValue));
    }
});

// Set sections as active
document.addEventListener('scroll', ()=> {
    console.log(`Scroll detected, updating active section`);
    addClassToActiveSection();
});