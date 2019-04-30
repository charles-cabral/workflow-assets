export default function(persons) {
  const person = persons.map(person => {
      return `
        <li class="person col-md-4 ${person.type}">
          <div class="content">
            <div class="d-flex justify-content-center align-items-center">
              <div class="flex-column col-md-3">
                <i class="icon -${person.icon}"></i>
              </div>
              <div class="flex-column col-md-9">
                <h5>${person.name}</h5>
                <p>${person.age} years / ${person.job}</p>
              </div>
            </div>
          </div>
        </li>
      `
    }).join("")

  const wrapper = document.createElement('div')
  wrapper.classList.add('container');
  wrapper.innerHTML = `
    <ul class="persons">${person}</ul>
    <img class="dog" src="/www/assets/img/dog.svg"/>
  `

  return document.body.appendChild(wrapper)
}