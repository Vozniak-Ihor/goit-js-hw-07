import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

function createFotoCads(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return ` <li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createFotoCads(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  doubleTapZoom: 1.7,
  alertErrorMessage: "Image not found, next image will be loaded",
});

gallery.on("shown.simplelightbox", function (event) {
  event.preventDefault();
  console.log("Everything works fine");
});

gallery.on("error.simplelightbox", function (event) {
  console.log(event, "Something wrong");
});
