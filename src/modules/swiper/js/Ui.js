export default function(depoiments) {
    const witness = depoiments
      .map(witness => {
        return `
          <li class="swiper-slide">
            <div class="content d-flex justify-content-center">
              <div class="align-self-center col-md-12">
                <h3>${witness.name}</h3>
                <p>${witness.text}</p>
              </div>
            </div>
          </li>
        `
      }).join('')

    const wrapper = document.createElement('div')
    wrapper.classList.add('container');
    wrapper.innerHTML = `
      <div class="swiper-container">
        <ul class="swiper-wrapper list-unstyled">${witness}</ul>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    `
    return document.body.appendChild(wrapper)
  }