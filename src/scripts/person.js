export const Person = ({ data }) => {
    return `
        <div class="artist artist-${data.key}">
            ${data.name}
        </div>
    `
}