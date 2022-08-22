import './styles/salut.scss'
export default function salut() {
  const h1 = document.createElement("h1");
  h1.textContent = "Salut tout le monde";
  h1.classList.add("title");
  document.body.appendChild(h1);
}
