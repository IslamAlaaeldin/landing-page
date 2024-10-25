    /**
     * @description Manipulates the navigation bar by creating buttons
     * @description: that scroll to corresponding sections when clicked.
     */

const Navbar = document.getElementsByClassName("navbar__menu");
const Navlist = document.getElementById("navbar__list");
const allSections = document.querySelectorAll('section[id^="section"]');
const sections = Array.from(allSections);

    /**
     * @description Checks if an element is fully visible in the viewport.
     * @param {HTMLElement} element - The DOM element to check visibility for.
     * @param  VALUE - this value based on how much the section needs to be in the viewport.
     * @returns {boolean} True if the element is fully visible; otherwise, false.
     */
    
const isInViewport = (element) => {
        const box = element.getBoundingClientRect();
        const VALUE = 150;
        return (
            box.top <= VALUE && box.bottom >= VALUE
        );
    };
    
        /**
         * Loop to create buttons for each section
         * @description Creates a button for each section and appends it to the navigation list.
         * @param {number} i - The section number for which the button is created.
         */
    
for (let i = 1; i <= allSections.length; i++) {
    let button = document.createElement('button');
    let list =document.createElement('li');
    button.setAttribute('class', `section${i}`);
    button.innerHTML = `section${i}`;
    list.appendChild(button);
    Navlist.appendChild(list);
    const Section = document.querySelector(`#section${i}`);
    
        /**
         * @description Scrolls to the specified section smoothly when the button is clicked.
         * @description:Add event listener for scrolling to the respective section
         * @description timeout to make sure that section becomed visible 
         */
    
    button.addEventListener("click", () => {
        if (Section) {Section.scrollIntoView({ behavior: "smooth" });}
        setTimeout(() => {
            if (isInViewport(Section)) {
                console.log(`Section ${i} is fully visible in the viewport!`);
                button.classList.add("active");
            } else {
                console.log(`Section ${i} is not fully visible.`);
                button.classList.remove("active");
            }
        }, 1000);
    });
    
        /**
         * @description Checks the visibility of each section and manages the "active" class.
         * @param section is section needed from sections array.
         */
    
    const checkSectionsVisibility = ()=> {
            if (isInViewport(Section)) {
                /**
                * @returns: adding "active" class if the section is not visible
                */
                Section.setAttribute("class","active");
                button.classList.add("active");

            } else {
                /**
                 * @returns: Remove "active" class if the section is not visible
                 */
                Section.classList.remove("active");
                button.classList.remove("active");
    
            }
    }
    
        /**
         * @returns: Adding scroll event listener to the window to check visibility of sections while scrolling
         */ 
    
    window.addEventListener("scroll", checkSectionsVisibility);
}
