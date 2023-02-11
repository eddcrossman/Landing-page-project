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
const navbarListElement = document.getElementById('navbar__list');
let listItemElements = [];
let navbarMenuTimeoutID;


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

        if(i.classList.contains('active__section')) {
            newListItem.firstChild.classList.add('active__link');}

        listItemElements.push(newListItem.firstChild);
        documentFragment.append(newListItem);
    }
    navbarListElement.appendChild(documentFragment);
}

// buildNav();

// Add class 'active' to section when near top of viewport
function addClassToActiveSection(){
    let closestDistance;
    let closestElementIndex;
    let currentActiveElementIndex;

    for (let i = 0; i < sectionElements.length; i++){
        let currentDistance = sectionElements[i].getBoundingClientRect().top;

        if (closestDistance === undefined || currentDistance < Math.abs(closestDistance)){
            closestDistance = currentDistance;
            closestElementIndex = i;
        }
        if (sectionElements[i].classList.contains('active__section')){
            currentActiveElementIndex = i;
        }
    }

    if (closestElementIndex !== currentActiveElementIndex){
        sectionElements[currentActiveElementIndex].classList.remove('active__section');
        listItemElements[currentActiveElementIndex].classList.remove('active__link');

        sectionElements[closestElementIndex].classList.add('active__section');
        listItemElements[closestElementIndex].classList.add('active__link');        
    }
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
    const headerElement = document.querySelector('.page__header');

    console.log(`Scroll detected, updating active section`);
    addClassToActiveSection();
    headerElement.classList.remove('header__hidden');

    if (navbarMenuTimeoutID) {
        clearTimeout(navbarMenuTimeoutID);}

    navbarMenuTimeoutID = setTimeout(()=>{
        if (window.scrollY > 100 ) {
           // navbarMenuElement.style.display ='none';
           headerElement.classList.add('header__hidden');
        }
    },5000);
});