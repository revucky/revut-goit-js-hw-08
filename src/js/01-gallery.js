// Add imports above this line
import SimpleLightbox from "simplelightbox";
import { galleryItems } from "./gallery-items";

const galeryRef = document.querySelector(".gallery");
const markUp = galleryItems
  .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      // data-source="${original}"
      alt="${description}"
    />
  </a>`;
  })
  .join("");
galeryRef.insertAdjacentHTML("beforeend", markUp);

new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryItems);
