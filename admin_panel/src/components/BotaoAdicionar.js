import { Link } from "react-router-dom";

import styles from "../styles/BotaoAdicionar.module.css";

function BotaoAdicionar({ pagina }) {
 
    if (pagina === "Adicionar Ingresso") {
        return (
            <button className={styles.buttonAdd}>
              <Link to="/postIngresso">{pagina}</Link>
            </button>
        )
    } if (pagina === "Adicionar Produto") {
        return (
                <button className={styles.buttonAdd}>
                  <Link to="/postProduto">{pagina}</Link>
                </button>
        )
    }

  

}

export default BotaoAdicionar;
