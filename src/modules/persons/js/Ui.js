export default function(persons) {
  const person = persons
    .map(person => {
      return `
        <li class="person col-md-4">
          <div class="content">
            <h5>${person.name}</h5>
            <p>${person.age} years / ${person.job}</p>
          </div>
        </li>
      `
    }).join("")

  const wrapper = document.createElement('div')
  wrapper.classList.add('container');
  wrapper.innerHTML = `<ul class="persons">${person}</ul>`

  return document.body.appendChild(wrapper)
}
