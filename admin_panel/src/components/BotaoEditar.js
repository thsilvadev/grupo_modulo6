import { Link } from "react-router-dom";

import iconlapis from "../images/icon-lapis.png";

import styles from "../styles/Ingresso.module.css";

const BotaoEditar = ({ elemento, id }) => {

    if (elemento === "ingresso") {
        return (
            <Link to={{pathname: `/editIngresso/${id}`}}>
              <button className={styles.column}>
                Editar
                <img src={iconlapis} width="30" height="30" alt="..." />
              </button>
            </Link>
          );
    } if (elemento ===  "produtos") {
        return (
            <Link to={{pathname: `/editProduto/${id}`}}>
              <button className={styles.column}>
                Editar
                <img src={iconlapis} width="30" height="30" alt="..." />
              </button>
            </Link>
        )
    } if (elemento ===  "pedido_ingresso") {
        return (
            <Link to={{pathname: `/editPedido/${id}`}}>
              <button className={styles.column}>
                <img src={iconlapis} width="30" height="30" alt="..." />
              </button>
            </Link>
        )

  
};

}

export default BotaoEditar;
