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

        return this
    }
    appendCircle() {
        
        this.loader.innerHTML = this.circle
    }
    animate() {
        this.tl
        .from(this.loader.querySelector('.circle'), 1, {
            y: '-1000px',

        })
        .to(this.loader.querySelector('.circle'), 1, {
            scale: `${150}%`,
            ease: Expo.easeInOut
        })
    }
    removeLoader() {
        this.loader.style.display = 'none'
        this.initHomepage()
    }
    initHomepage() {
       const homeEls = {
           title: document.querySelector('.heading'),
           initQuote: document.querySelectorAll('.quote-item')[0],
           arrows: [...document.querySelectorAll('.arrow')],
           copyBtn:  document.querySelector('.copy-to')
       }

       const introTl = new TimelineMax();

       introTl
            .add("start")
            .from(homeEls.title, 1, {
                y: '110%',
                ease: Expo.easeInOut
            }, "start")
            .from(homeEls.initQuote, 1, {
                autoAlpha: 0,
                ease: Expo.easeInOut
            }, "start")
            .staggerFrom(homeEls.arrows, 1, {
                rotation: 360,
                scale: 0,
                autoAlpha: 0,
                ease: Expo.easeInOut
            }, .3)
            .from(homeEls.copyBtn, 1, {
                rotation: 360,
                scale: 0,
                autoAlpha: 0,
                ease: Expo.easeInOut
            }, "start")
    }
}