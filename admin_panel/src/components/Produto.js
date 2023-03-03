import styles from "../styles/Produto.module.css";

import BotaoEditar from "./BotaoEditar";
import BotaoDeletar from "./BotaoDeletar";

const Produto = ({ id, titulo, valor, imagem }) => {
  //fazer a função do fotoHover


  return (
    <div class="col-12 col-sm-6 col-lg-4">
      <div className={styles.box}>
        <h3>{titulo}</h3>
        <div className={styles.imagem}>
          <div>
            <img src={imagem} alt="..." className={styles.responsive} />
          </div>
          <div className={styles.textos}>
            <p>
              Valor: R$ <b>{valor}</b>
            </p>
          </div>

          <div className={styles.column}>
            <BotaoEditar elemento="produtos" id={id} />

            <BotaoDeletar elemento="produtos" id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produto;
