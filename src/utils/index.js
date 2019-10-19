export const Utils = {
    createDOMElement({ type, id, attachTo }) {
        const domElement = document.createElement(type)
        domElememt.setAttribute('id', id)
        
        attachTo.appendChild(domElement)

        return domElement;

    }
}