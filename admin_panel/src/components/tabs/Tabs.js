import { Link } from 'react-router-dom';

import styles from "../../styles/Tabs.module.css"

const Tabs = ({ buttonType }) => {

  return (
        <div className={styles.Abas}>
          <Link className={` ${styles.button}  ${buttonType === "Ingressos" ? styles.shadow : ""}` } to="/">
              Ingressos
          </Link>

          <Link className={` ${styles.button}  ${buttonType === "Produtos" ? styles.shadow : ""}`} to="/produtos">
              Produtos
          </Link>
        </div>
  );
};
export default Tabs;