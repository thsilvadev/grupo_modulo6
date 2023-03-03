import Produto from "../components/Produto";

import Tabs from "../components/tabs/Tabs";

import styles from "../styles/Produtos.module.css";

import React, { useEffect, useState } from "react";
import BotaoAdicionar from "../components/BotaoAdicionar";
import Axios from "axios";

function Produtos() {
   const [produtos, setProdutos] = useState([]);

   useEffect(() => {
     Axios.get("http://localhost:3344/produtos").then((response) => {
       setProdutos(response.data);
     });
   }, []);

  return (
    <>
      <div className={styles.Bg}>
        <div className={styles.blackOverlay}>
          <div className={styles.Container}>
            <Tabs buttonType="Produtos" />
            <h2>Produtos</h2>

            <BotaoAdicionar pagina="Adicionar Produto" />
            <div class="text-center">
              <div class="row justify-content-around">
                {produtos.map((produto) => (
                  <Produto
                    id={produto.id}
                    titulo={produto.titulo}
                    valor={produto.valor}
                    descricao={produto.descricao}
                    imagem={produto.imagem}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Produtos;
