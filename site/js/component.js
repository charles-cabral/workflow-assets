export default function(persons) {
    const person = persons.map( person => {
        return `
            <h2>${person.name}</h2>
            <p>${person.age} anos / ${person.job}</p>
        `
    }).join('$')
    return document.body.innerHTML = person
}
