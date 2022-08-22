import image from "./images/image.gif";

export default function picture() {
  const div = document.querySelector("div");
  div.innerHTML = "toto";
  const img = document.createElement("img");
  img.src = image;
  document.body.appendChild(img);
}
