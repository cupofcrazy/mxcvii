import { TimelineMax, Expo } from "gsap";

export default class Loader {
    constructor() {
        this.loader = document.querySelector('#loader')
        this.circle = `<div class="circle"></div>`;
        this.tl = new TimelineMax({ delay: 1, onComplete: () => this.removeLoader() })
    }
    init() {
        this.appendCircle()
        this.animate()
    }
    appendCircle() {
        
        this.loader.innerHTML = this.circle
    }
    animate() {
        this.tl.to(this.loader.querySelector('.circle'), 3, {
            scale: `${window.innerWidth / 10}%`,
            ease: Expo.easeInOut
        })
    }
    removeLoader() {
        this.loader.style.display = 'none'
    }
}