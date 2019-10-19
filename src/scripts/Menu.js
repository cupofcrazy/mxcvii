import  { TweenMax } from 'gsap'

/**
 * @param { HTML Element } target Target element
 */
class Menu {
    constructor({ target }) {
        this.target = target || document.getElementById('menu')
    }
    open() {
        // Open functionality
    }
    close() {
        // Close functionality
    }
    getMenu() {
        return this.target //!== null ? this.target : null;
    }
    animate() {

    }
}

export default Menu;