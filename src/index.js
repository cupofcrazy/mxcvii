import person, { Person } from './scripts/person'
import data from './assets/content/data.json'
import './styles/main.scss'
import { TweenMax, Expo } from 'gsap';


console.log(data)
data.forEach(personData => {
    document.querySelector('.persons').innerHTML += Person({ data: personData })
})

TweenMax.staggerFrom('.artist', 2, {
    y: '100',
    autoAlpha: 0,
    ease: Expo.easeOut
}, .05)

