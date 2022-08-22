import './styles/salut.scss'
import produits from './data/product.xml'

export default function salut() {
  console.log(typeof produits)
  const h1 = document.createElement("h1");
  h1.textContent = "Salut tout le monde 👩🏿‍🦯👩🏿‍🦯👩🏿‍🦯👩🏿‍🦯";
  h1.classList.add("title");
  document.body.appendChild(h1);
}
