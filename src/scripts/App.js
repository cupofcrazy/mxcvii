import quotes from '../assets/content/data.json'
import utils from '../utils'
import '../styles/main.scss'
import { TweenMax, Expo, TimelineMax } from 'gsap';
import { Quote } from './quote'

/**
 * @param None
 */

export default () => {

    const hideElem = (el) => el.style.display = 'none'

    const quotesWrapper = document.getElementById('quotes-wrapper')

    const quotes_copy = Array.from(quotes)
    const QUOTES_LENGTH = quotes_copy.length

    utils.shuffle(quotes_copy)

    // CONTROLS
    const controls = document.querySelector('.controls')


    // APPEND ALL QOUTES TO DOM
    quotes_copy.forEach(quotesData => {
        const { quote, author } = quotesData
        
        quotesWrapper.innerHTML += Quote({ author, quote })
    })

    // STORE COUNTER, QUOTES VARS
    let count = 0;
    let quoteEls = [...document.querySelectorAll('.quote-item')]
    quoteEls[count].classList.add('active')


    // ENABLE CONTROLS
    const ctrls = {
        
        prev: controls.querySelector('.arrow.up'),
        next: controls.querySelector('.arrow.down')
    }

    // SET CONTROLS FOR BUTTONS
    ctrls.next.addEventListener('click', (e) => navigate('next'))
    ctrls.prev.addEventListener('click', (e) => navigate('prev'))

    let isAnimating = false;

    // Navigator
    const navigate = (direction) => {

        if (isAnimating) return; // !IMPORTANT

        if (direction === 'next') {
            if (count < (QUOTES_LENGTH - 1)) {
                isAnimating = true
                // ANIMATE-OUT CURRENT SELECTED QUOTE
                const tl = new TimelineMax({ onComplete: () => {
                    currentQuote.classList.remove('active');
                    isAnimating = false
                }})

                const currentQuote = quoteEls[count]
                const quote = currentQuote.querySelector('.quote')
                const author = currentQuote.querySelector('.author')
                const lines = author.querySelectorAll('.line')


                tl.to(quote, .5, {
                    y: -50,
                    autoAlpha: 0,
                    ease: Expo.easeInOut
                    
                })
                .staggerTo(lines, .5, {
                    scaleX: 0,
                    ease: Expo.easeInOut
                    
                })
                .to(author, .5, {
                    y: 50,
                    scale: 0.5,
                    autoAlpha: 0
                    
                })
                // ANIMATE-IN CURRENT SELECTED QUOTE
                setTimeout(() => {
                    count++;
                    const tl = new TimelineMax( )

                    const nextQuote = quoteEls[count]
                    const quote = nextQuote.querySelector('.quote')
                    const author = nextQuote.querySelector('.author')
                    const lines = author.querySelectorAll('.line')

                    nextQuote.classList.add('active')


                    tl.fromTo(quote, .5, {
                        y: -50,
                        autoAlpha: 0,
                        ease: Expo.easeInOut
                        
                    }, {
                        y: 0,
                        autoAlpha: 1
                    })
                    
                    .fromTo(author, .5, {
                        y: 50,
                        scale: 0.5,
                        autoAlpha: 0
                        
                    }, {
                        y: 0,
                        scale: 1,
                        autoAlpha: 1
                    })
                    .staggerFromTo(lines, .5, {
                        scaleX: 0,
                        ease: Expo.easeInOut
                        
                    }, {
                        scaleX: 1,
                        ease: Expo.easeInOut
                    })
                }, 1500)
                
                // quoteEls[count].classList.add('active')
            }
        }
        else {
            if (count > 0) {
                isAnimating = true

                const tl = new TimelineMax({ onComplete: () => {
                    currentQuote.classList.remove('active')
                    isAnimating = false
                }})

                const currentQuote = quoteEls[count]
                const quote = currentQuote.querySelector('.quote')
                const author = currentQuote.querySelector('.author')
                const lines = author.querySelectorAll('.line')


                tl.to(quote, .5, {
                    y: -50,
                    autoAlpha: 0,
                    ease: Expo.easeInOut
                    
                })
                .staggerTo(lines, .5, {
                    scaleX: 0,
                    ease: Expo.easeInOut
                    
                })
                .to(author, .5, {
                    y: 50,
                    scale: 0.5,
                    autoAlpha: 0
                    
                })
                // ANIMATE-IN CURRENT SELECTED QUOTE
                setTimeout(() => {
                    count++;
                    const tl = new TimelineMax( )

                    const nextQuote = quoteEls[count]
                    const quote = nextQuote.querySelector('.quote')
                    const author = nextQuote.querySelector('.author')
                    const lines = author.querySelectorAll('.line')

                    nextQuote.classList.add('active')


                    tl.fromTo(quote, .5, {
                        y: -50,
                        autoAlpha: 0,
                        ease: Expo.easeInOut
                        
                    }, {
                        y: 0,
                        autoAlpha: 1
                    })
                    
                    .fromTo(author, .5, {
                        y: 50,
                        scale: 0.5,
                        autoAlpha: 0
                        
                    }, {
                        y: 0,
                        scale: 1,
                        autoAlpha: 1
                    })
                    .staggerFromTo(lines, .5, {
                        scaleX: 0,
                        ease: Expo.easeInOut
                        
                    }, {
                        scaleX: 1,
                        ease: Expo.easeInOut
                    })
                }, 1500)
                
                
                
            }
        }

    }

    // COPY TO CLIPBOARD FUNC
    const copyToButton = document.querySelector('.copy-to')
    copyToButton.addEventListener('click', () => {
        const currentQuote = quoteEls[count]

        const QUOTE_TEXT = currentQuote.querySelector('.quote p').innerText;
        utils.copyToClipboard(QUOTE_TEXT);

        const tl = new TimelineMax();
        copyToButton.querySelector('p').innerText = 'Copied';
        
        setTimeout(() => {
            copyToButton.querySelector('p').innerText = 'Copy';
        }, 1000)
    })


        
        
        





}