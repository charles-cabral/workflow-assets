export default function(persons) {
  const person = persons
    .map(person => {
      return `
        <li class="person">
          <h2>${person.name}</h2>
          <p>${person.age} anos / ${person.job}</p>
        </li>
      `;
    })
    .join("");
  return (document.body.innerHTML = `<ul class="persons">${person}</ul>`);
}
