export const Person = ({ data }) => {
    const { key, name, DOB } = data;
    return `
        <div class="person grid-item" data-scroll>
            <div class="image">
                <img src=${require(`../assets/images/brown.png`)} />
            </div>
            <div class="info">
                <span class="name">${name}</span>
                <span class="date">${DOB.birth} - ${DOB.death}</span>
            </div>
            
        </div>
    `
}