import { Container } from './styled'

import Products from '../product'
import { useState } from 'react'

export default function Home() {
  const [products, setProducts] = useState([]);

  function listar() {
    const r = [
      {
        id: 10001,
        picture: "https://http2.mlstatic.com/D_NQ_NP_755842-MLB47599396706_092021-O.webp",
        title: "PC Gamer",
        price: "R$ 12.584,00",
        description: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        specifications: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
      },
      {
        id: 10002,
        picture: "https://a-static.mlcdn.com.br/618x463/tablet-samsung-galaxy-tab-a-t290-wi-fi-32gb-android-quad-core-2ghz-tela-8-preto/mobstore/307836/1cbfcee8effffc69bed1dff397b43597.jpg",
        title: "Tablet Samsung",
        price: "R$ 950,00",
        description: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        specifications: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
      },
      {
        id: 10003,
        picture: "https://a-static.mlcdn.com.br/618x463/smartphone-samsung-galaxy-a12-64gb-branco-4g-octa-core-4gb-ram-65-cam-quadrupla-selfie-8mp/magazineluiza/155617400/801329f43140502b978a6b70e77a1753.jpg",
        title: "Celular Samsung",
        price: "R$ 1.484,00",
        description: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        specifications: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
      },
      {
        id: 10004,
        picture: "https://a-static.mlcdn.com.br/618x463/fifa-22-para-xbox-one-electronic-arts/magazineluiza/231240000/28fed539284c32e268dfb88201669b43.jpg",
        title: "FIFA 22 para Xbox One",
        price: "R$ 384,00",
        description: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        specifications: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
      },
      {
        id: 10005,
        picture: "https://a-static.mlcdn.com.br/618x463/controle-para-ps5-sem-fio-dualsense-sony-midnight-black/magazineluiza/230019300/89af4b55edae3af2e94df48962336e1f.jpg",
        title: "Controle para PS5",
        price: "R$ 474,00",
        description: "Esse produto é muito legal e você deve comprá-lo porque sua vida será feliz!!!",
        specifications: "Esse produto é de ótima qualidade você não vai se arrepender jamais na sua vidinha!!"
      }
    ]

    setProducts(r);
  }
  return (
    <Container>
      <h1 className="title"> Olá, seja bem vindo!!!  </h1>
      <br />
      <button onClick={listar}> Listar </button>
      <br />
      <div className="listproducts">  
        {products.map(item => 
            <Products info={item} />
        )}
      </div>
    </Container>
  )

}