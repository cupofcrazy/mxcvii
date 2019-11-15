

class App {
    constructor() {
        this.quotesWrapper = document.getElementById('quotes-wrapper');

    }
    hideElem(elem) {
        elem.style.display = 'none'
    }
    shuffle() {

    }
    appendQuotes() {
        this.quotes_copy.forEach(quotesData => {
            const { quote, author } = quotesData
            this.quotesWrapper.innerHTML += Quote({ author, quote })
        })
    }

}