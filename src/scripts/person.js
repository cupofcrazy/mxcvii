export const Person = ({ data }) => {
    return `
        <div class="person person-${data.key}">
            <div class="mask">
                <p class="person-name">${data.name}</p>
            </div>
            
        </div>
    `
}