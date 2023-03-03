import React from "react";

import styles from "../styles/Grid.module.css";

import BotaoEditar from "./BotaoEditar";
import BotaoDeletar from "./BotaoDeletar";

const Grid = ({ id, nome, cpf, email, id_ingresso }) => {

  // // //PEDIDOS FILTRADOS

  //   const pedidosFiltrados = pedidos.filter((pedido_cliente) => {
  //    //se não houver input, retornar toda a table
  //     if (cpf === '') {
  //      return pedido_cliente;
  //     }
  //     //retorna somente o pedido do cpf desejado
  //     else {
  //      return pedido_cliente.includes(cpf)
  //     }
  //   })




  return (
    <tr>
      <td>{nome}</td>
      <td>{cpf}</td>
      <td>{email}</td>
      <td>{id_ingresso}</td>
      <td>
        <div className={styles.column}>
          <BotaoEditar elemento="pedido_ingresso" id={id}/>

          <BotaoDeletar elemento="pedido_ingresso" id={id} />
        </div>
      </td>
    </tr>
  );
};

export default Grid;
