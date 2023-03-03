import iconlixo from "../images/icon-lixo.png";

import styles from "../styles/Ingresso.module.css";

import Axios from "axios";

import { useNavigate } from "react-router-dom";

import React, { useState } from "react";

const BotaoDeletar = ({ elemento, id }) => {

  let navigate = useNavigate();

  const [produtos, setProdutos] = useState([]);

  const DeletarProduto = () => {
    Axios.delete(`http://localhost:3344/produtos/${id}`)

      .then(() => {
        setProdutos(produtos.filter((produto) => produto.id !== id));
        window.location.reload();
        navigate("/produtos");
        alert("Produto deletado com sucesso!");
      })
      .catch(() => {
        alert("Erro ao deletar o produto.");
      });
  };

  const [ingressos, setIngressos] = useState([]);

  const DeletarIngresso = () => {
    Axios.delete(`http://localhost:3344/ingresso/${id}`)

      .then(() => {
        setIngressos(ingressos.filter((ingresso) => ingresso.id !== id));
        window.location.reload();
        navigate("/");
        alert("Produto deletado com sucesso!");
      })
      .catch(() => {
        alert("Erro ao deletar o produto.");
      });
  };

  const [pedido, setPedidos] = useState([]);

  const DeletarPedido = () => {
    Axios.delete(`http://localhost:3344/pedido_ingresso/${id}`)

      .then(() => {
        setPedidos(pedido.filter((pedido) => pedido.id !== id));
        window.location.reload();
        navigate("/pedido_ingresso");
        alert("pedido deletado com sucesso!");
      })
      .catch(() => {
        alert("Erro ao deletar o pedido.");
      });
  };

  if (elemento === "ingresso") {
    return (
      <button onClick={DeletarIngresso} className={styles.column}>
        Deletar
        <img src={iconlixo} width="30" height="30" alt="..." />
      </button>
    );
  }
  if (elemento === "produtos") {
    return (
      <button onClick={DeletarProduto} className={styles.column}>
        Deletar
        <img src={iconlixo} width="30" height="30" alt="..." />
      </button>
    );
  }
  if (elemento === "pedido_ingresso") {
    return (
      <button onClick={DeletarPedido} className={styles.column}>
        <img src={iconlixo} width="30" height="30" alt="..." />
      </button>
    );
  }
};

export default BotaoDeletar;
