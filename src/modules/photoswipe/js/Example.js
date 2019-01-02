export default function(size) {
  let items = []

  for (let i = 0; i < size; i++) {
    items += `
      <figure class="slide col">
        <a  class="link"
            href="https://picsum.photos/2000/2000?image=${i+1}"
            data-size="2000x2000"
            title="Title ${i+1}">
            <img width="150" height="99" src="https://picsum.photos/200/200?image=${i+1}">
        </a>
      </figure>
    `
  }

  const wrapper = document.createElement('div')
  wrapper.classList.add('container');
  wrapper.innerHTML = `<div class="row gallery">${items}</div>`

  return document.body.appendChild(wrapper)
}