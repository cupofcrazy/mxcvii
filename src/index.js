import person, { Person } from './scripts/person'
import data from './assets/content/data.json'
import './styles/main.scss'
import { TweenMax, Expo } from 'gsap';


console.log(data)
data.forEach(personData => {
    document.querySelector('.main .container').innerHTML += Person({ data: personData })
})
const persons = [...document.querySelectorAll('.person')]

persons[0].classList.add('active')
const personsPrgh = [...document.querySelectorAll('.person p')]


TweenMax.staggerFrom(personsPrgh, 2, {
    y: '100%',
    ease: Expo.easeOut,
    delay: 1
}, .1)


persons.forEach(person => {
    person.addEventListener('click', (e) => {
        console.log(e.target)
        person.classList.add('active')

        persons.forEach(p => {
            if (p.classList.contains('active')) {
                person.classList.remove('active')
            }
            
        })
    })
})

