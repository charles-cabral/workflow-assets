export default function(depoiments) {
    const witness = depoiments
      .map(witness => {
        return `
          <li class="swiper-slide">
            <h3>${witness.name}</h3>
            <p>${witness.text}</p>
          </li>
        `;
      }).join('');
    return document.body.innerHTML += `
      <div class="swiper-container">
        <ul class="swiper-wrapper list-unstyled">
          ${witness}
        </ul>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
      </div>
    `;
  }