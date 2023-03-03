import styles from "../styles/Ingresso.module.css";

import BotaoEditar from "./BotaoEditar";
import BotaoDeletar from "./BotaoDeletar";

import React, { useEffect, useState } from "react";
import Axios from "axios";

const Ingresso = ({
  id,
  nome,
  valor,
  data_evento,
  quantidade,
  foto,
  foto_disponivel,
  foto_indisponivel,
}) => {

  //Pegar quantos pedidos há cadastrados em cada ID_INGRESSO
  const [count, setCount] = useState(1);

  useEffect(() => {
    Axios.get(`http://localhost:3344/pedido_ingresso/count/${id}`).then((response) => {
      if (response.data !== undefined) {
        setCount(response.data);
        console.log(response.data);
      } else {
        console.error("Invalid response data:", response.data);
      }
    });
  }, [id]);

  //Comparar com a quantidade disponível de cada 

  function Disponibilidade() {
    if (count >= quantidade) {
      return `${foto_indisponivel}`;
    } else {
      return `${foto_disponivel}`;
    }
  }
  
  console.log(Disponibilidade());
  console.log(quantidade);
  console.log(id);

  return (
    <div class="col-12 col-sm-6 col-lg-4">
      <div className={styles.box}>
        <h3>{nome}</h3>
        <div className={styles.imagem}>
          <div>
            {<img
              src={Disponibilidade()}
              className={styles.responsive}
              alt="..."
            />}
          </div>
          <div className={styles.textos}>
            <p>Valor: R$ {valor}</p>
            <p>Data do evento: {data_evento}</p>
            <p>Quantidade: {quantidade}</p>
            <p>ID: {id}</p>
          </div>

          <div className={styles.column}>
            <BotaoEditar elemento="ingresso" id={id} />

            <BotaoDeletar elemento="ingresso" id={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ingresso;
