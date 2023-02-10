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

// build the nav

function buildNav() {    
    const navbarList = document.getElementById('navbar__list');
    const sectionElements = document.getElementsByTagName('section');

    const documentFragment = document.createDocumentFragment();

    for (let i of sectionElements){
        const newListItem = document.createElement('LI');

        newListItem.className = `menu__link`;
        newListItem.innerHTML = i.dataset.nav;

        documentFragment.append(newListItem);
    }
    navbarList.appendChild(documentFragment);
}

buildNav();

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 



// Scroll to section on link click

// Set sections as active


