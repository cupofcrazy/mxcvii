import person, { Person } from './scripts/person'
import LocomotiveScroll from 'locomotive-scroll'
import data from './assets/content/data.json'
import './styles/main.scss'
import { TweenMax, Expo } from 'gsap';



data.forEach(personData => {
    document.querySelector('.main .container.grid').innerHTML += Person({ data: personData })
})
const persons = [...document.querySelectorAll('.person')]

    
const scroll = new LocomotiveScroll({
    el: document.querySelector('#app')
})
