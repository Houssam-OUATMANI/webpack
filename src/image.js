import image from "./images/image.gif";

export default function picture() {
  const img = document.createElement("img");
  img.src = image;
  document.body.appendChild(img);
}
