import styles from "./style.module.css";
import logo from "../../assets/pobreflix-logo.png";
import { Card } from "../../Components/Cards";
import filme1 from "../../assets/cards/inception.webp";
import filme2 from "../../assets/cards/godfather.webp";
import filme3 from "../../assets/cards/darkKnight.webp";
import filme4 from "../../assets/cards/space-odyssey.webp";
import filme5 from "../../assets/cards/pulp-fiction.webp";
import filme6 from "../../assets/cards/bastardos.webp";
import filme7 from "../../assets/cards/scarface.webp";
import filme8 from "../../assets/cards/shining.webp";
import filme9 from "../../assets/cards/shrek.webp";

import serie1 from "../../assets/cards/breakingbad.webp";
import serie2 from "../../assets/cards/got.webp";
import serie3 from "../../assets/cards/strangerthings.webp";
import serie4 from "../../assets/cards/casa.webp";
import serie5 from "../../assets/cards/dark.webp";
import serie6 from "../../assets/cards/office.webp";
import serie7 from "../../assets/cards/saul.webp";
import serie8 from "../../assets/cards/tlou.webp";
import serie9 from "../../assets/cards/onepiece.webp";


export const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </header>

      <main className={styles.painel}>
        <h2>Filmes</h2>
        <div className={styles.linha}>
          <Card imagem={filme1} titulo="A Origem" />
          <Card imagem={filme2} titulo="O Poderoso Chefão" />
          <Card imagem={filme3} titulo="O Cavaleiro das Trevas" />
          <Card imagem={filme4} titulo="2001: Uma Odisseia no Espaço" />
          <Card imagem={filme5} titulo="Pulp Fiction" />
          <Card imagem={filme6} titulo="Bastardos Inglórios" />
          <Card imagem={filme7} titulo="Scarface" />
          <Card imagem={filme8} titulo="O Iluminado" />
          <Card imagem={filme9} titulo="Shrek" />
        </div>

        <h2>Séries</h2>
        <div className={styles.linha}>
          <Card imagem={serie1} titulo="Breaking Bad" />
          <Card imagem={serie2} titulo="Game of Thrones" />
          <Card imagem={serie3} titulo="Stranger Things" />
          <Card imagem={serie4} titulo="La Casa de Papel" />
          <Card imagem={serie5} titulo="Dark" />
          <Card imagem={serie6} titulo="The Office" />
          <Card imagem={serie7} titulo="Better Call Saul" />
          <Card imagem={serie8} titulo="The Last of Us" />
          <Card imagem={serie9} titulo="One Piece" />
        </div>
      </main>

      <footer className={styles.footer}> © 2025 Pobreflix</footer>
    </div>
  );
};
