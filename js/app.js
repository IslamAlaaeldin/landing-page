    /**
     * @description Checks if an element is fully visible in the viewport.
     * @param {HTMLElement} element - The DOM element to check visibility for.
     * @returns {boolean} True if the element is fully visible; otherwise, false.
     */
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
    /**
     * @description Manipulates the navigation bar by creating buttons
     * @description: that scroll to corresponding sections when clicked.
     */
const Navbar = document.getElementsByClassName("navbar__menu");
const Navlist = document.getElementById("navbar__list");
const allSections = document.querySelectorAll('section[id^="section"]');
const sections = Array.from(allSections);
     /**
      * Loop to create buttons for each section
      * @description Creates a button for each section and appends it to the navigation list.
      * @param {number} i - The section number for which the button is created.
      */
for (let i = 1; i <= allSections.length; i++) {
    let button = document.createElement('button');
    button.setAttribute('class', `section${i}`);
    button.innerHTML = `section${i}`;
    Navlist.appendChild(button);
        /**
         * @description Scrolls to the specified section smoothly when the button is clicked.
         * @description:Add event listener for scrolling to the respective section
         * @description timeout to make sure that section becomed visible 
         */
    button.addEventListener("click", () => {
        const Section = document.querySelector(`#section${i}`);
        if (Section) {Section.scrollIntoView({ behavior: "smooth" });}
        setTimeout(() => {
            if (isInViewport(Section)) {
                console.log(`Section ${i} is fully visible in the viewport!`);
            } else {
                console.log(`Section ${i} is not fully visible.`);
            }
        }, 1000);
    });
}
    /**
     * @description Checks the visibility of each section and manages the "active" class.
     * @param section is section needed from sections array.
     */
const checkSectionsVisibility = ()=> {
    sections.forEach((section) => {
        if (isInViewport(section)) {
            /**
            * @returns: adding "active" class if the section is not visible
            */
            section.setAttribute("class","active");
        } else {
             /**
             * @returns: Remove "active" class if the section is not visible
             */
            section.classList.remove("active");
        }
    });
}
    /**
     * @returns: Adding scroll event listener to the window to check visibility of sections while scrolling
     */
window.addEventListener("scroll", checkSectionsVisibility);

