import App from './scripts/App'
import Loader from './scripts/Loader'



let loader;
window.addEventListener('DOMContentLoaded', () => {
    loader = new Loader()
    loader.init()
    App()
})