import { galleryItems } from "./gallery-items.js";
// console.log(galleryItems);
// Change code below this line

function createFotoCads(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
      <a class="gallery__link" href="${original}"> 
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li> `;
    })
    .join("");
}

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createFotoCads(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

galleryEl.addEventListener("click", ff);

function ff(evt) {
  evt.preventDefault();
  
  if (!evt.target.classList.contains("gallery__image")) {
    return;
  }
  // console.log(evt.target);
  
  const openModal = basicLightbox.create(`
  <img src="${evt.target.dataset.source}" width="800" height="600">
  `);
  openModal.show();
  
  galleryEl.addEventListener('keydown', (evt) => {
    if(evt.code === 'Escape'){
openModal.close()
    }
  })
}
