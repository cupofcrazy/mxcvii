export const Quote = ({ author, quote }) => {
    return `
    <div class="quote-item">
        <div class="quote">
            <p>"${ quote }"</p>
        </div>
        <div class="author">
            <span class="line left"></span>
            <h3>${ author }</h3>
            <span class="line right"></span>
        </div>
    </div>
    `
}