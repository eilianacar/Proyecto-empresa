import shuffle from "lodash.shuffle";
import img1 from "../../assests/GAV_Personaje01.png";
import img2 from "../../assests/GAV_Personaje31.png";
import img3 from "../../assests/GAV_Personaje22.png";
import img4 from "../../assests/GAV_Personaje08.png";
import img5 from "../../assests/GAV_Personaje30.png";
import img6 from "../../assests/GAV_Personaje07.png";
import img7 from "../../assests/GAV_Personaje05.png";
import img8 from "../../assests/GAV_Personaje06.png";
import img9 from "../../assests/GAV_Personaje32.png";
import img10 from "../../assests/GAV_Personaje11.png";
//Helper para revolver las tarjetas
export const buildDeck = () => {
  const hootieImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
  const cardsQty = 10;
  let cards = [];

  while (cards.length < cardsQty) {
    const index = Math.floor(Math.random() * 10);
    //cards.push(this.hootieImages[index]);
    let extractedImg = hootieImages.splice(index, 1)[0];
    //para evitar que se agreguen img: undefined en cards
    while (extractedImg === undefined) {
      const index = Math.floor(Math.random() * 10);
      extractedImg = hootieImages.splice(index, 1)[0];
    }
    const card = {
      img: extractedImg,
      wasMatched: false,
    };
    cards.push(card);
    cards.push({ ...card });
  }
  return shuffle(cards);
};
