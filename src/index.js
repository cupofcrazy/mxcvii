import person, { Person } from './scripts/person'
import LocomotiveScroll from 'locomotive-scroll'
import Flickity from 'flickity'
import data from './assets/content/data.json'
import './styles/main.scss'
import { TweenMax, Expo, TimelineMax } from 'gsap';

const main = document.querySelector('.main .container')

data.forEach(personData => {
    main.innerHTML += Person({ data: personData })
})
const persons = [...document.querySelectorAll('.person')]


const hideEls = (els) => {
    TweenMax.set(els, { autoAlpha: 0 })
}

const homeEls = document.querySelectorAll('[data-hide]')
    hideEls(homeEls)

function initHomepage() {
    const intro = new TimelineMax()

    intro
        .set('[data-hide]', { autoAlpha: 1 })


        .from('.title', 1, {
            y: '100%',
            autoAlpha: 0,
            ease: Expo.easeInOut
        })
        .staggerFrom(persons, 2, {
            autoAlpha: 0,
            x: 100,
            scale: 1.1,
            ease: Expo.easeOut
        }, .1)
        .from('.drag-help', 2, {
            x: 30,
            autoAlpha: 0,
            ease: Expo.easeOut
        }, 1)
}

window.addEventListener('DOMContentLoaded', () => {
    TweenMax.to('.loader', 1, {
        height: 0,
        ease:Expo.easeInOut,
        onComplete:() => initHomepage()
    })
})


const flickity = new Flickity(main, {
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    // freeScroll: true,
    // freeScrollFriction: 0.03
})

flickity.on('dragMove', (event, pointer, moveVector) => {
    console.log({ moveVector })
    TweenMax.to(main, 1, {
        transformOrigin: '0% 50%',
        skewX:moveVector.x * 0.05,
        ease: Expo.easeOut
    })

})

flickity.on('dragEnd', () => {
    TweenMax.to(main, 1, {
        skewX: 0,
        ease: Expo.easeOut
    })

})
