import Tabs from "../components/tabs/Tabs";
import Ingresso from "../components/Ingresso";

import styles from "../styles/Ingressos.module.css";

import React, { useState, useEffect, useMemo } from "react";

import BotaoAdicionar from "../components/BotaoAdicionar";

import Grid from "../components/Grid";

import Axios from "axios";

function Ingressos() {


  //INGRESSOS
  const [ingressos, setIngressos] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3344/ingresso")
    .then((response) => {
      setIngressos(response.data);
    })
  }, []);

  

  //PEDIDOS

  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3344/pedido_ingresso")
    .then((response) =>{
      setPedidos(response.data);
    })
  }, []);

  //UNINDO AS DUAS ARRAYS

  //const data = Object.assign({}, { pedidos }, { ingressos });

  //SET INPUT TEXT

  const [inputText, setInputText] = useState("");
  const inputHandler = (e) => {
    setInputText(e.target.value);
  }


  //BARRA DE PESQUISAR

  const pedidosFiltrados = useMemo(() => {
    if (inputText === '') return pedidos;

    return pedidos.filter((pedido) => {

      // _______SHORT-CIRCUIT EVALUATION_______

      //  T && json --> json
      //  F && json --> undefined


      // _______TERNÁRIO_________
      //  T ? json : fds  --> json
      //  F ? json : fds  --> fds
      return pedido.cpf_usuario.startsWith(inputText)
    })
  }, [inputText, pedidos])

  return (
    <>
      <div className={styles.Bg}>
        <div className={styles.blackOverlay}>
        <div className={styles.Container}>
          <Tabs buttonType="Ingressos" />
          

          <h2> Ingressos</h2>
          <BotaoAdicionar pagina="Adicionar Ingresso" />
          <div class="text-center">
            <div class="row justify-content-start">
              {ingressos.map((ingresso, key) => (
                <Ingresso key={key}
                  id={ingresso.id}
                  nome={ingresso.nome}
                  valor={ingresso.valor}
                  data_evento={ingresso.data_evento}
                  quantidade={ingresso.quantidade}
                  foto={ingresso.foto}
                  foto_disponivel={ingresso.foto_disponivel}
                  foto_indisponivel={ingresso.foto_indisponivel}
                />
              ))}

              {/* <Ingresso />

            <Ingresso />

            <Ingresso />

            <Ingresso /> */}
            </div>
          </div>

          <h2> Listagem de pedidos</h2>

          <input 
            className={styles.Pesquisa} 
            type="text" 
            placeholder="Pesquisar por CPF (sem hífen)"
            onChange={inputHandler} />

          <div class="table">
            <table class="table" border="6" rules="all">
              <thead>
                <tr>
                  <th scope="col">Nome do cliente</th>
                  <th scope="col">CPF</th>
                  <th scope="col">Email</th>
                  <th scope="col">Ingresso adquirido</th>
                  <th scope="col" class="acao"></th>
                </tr>
              </thead>
              <tbody>
                {pedidosFiltrados.map((pedido) => (
                  <Grid
                    id={pedido.id}
                    nome={pedido.nome_usuario}
                    cpf={pedido.cpf_usuario}
                    email={pedido.email}
                    id_ingresso={pedido.id_ingresso}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
        </div>
        
    </>
  );
}

export default Ingressos;
