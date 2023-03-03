import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


import { Link } from "react-router-dom";

import * as yup from "yup";

import Axios from "axios";

import React, { useEffect } from "react";

//Transformar alert em Toasfify //


import { useNavigate, useParams } from "react-router-dom";

//css
import styles from "../styles/EditPedido.module.css";

const validarProduto = yup.object({
  nome_usuario: yup
    .string()
    .required("O nome do cliente é obrigatório.")
    .max(50, "O nome precisa ter menos de 50 caracteres.")
    .min(2, "O nome precisa ter pelo menos 2 caracteres"),
  cpf_usuario: yup
    .number()
    .required("Insira o CPF. Somente números."),
  email: yup.string().required("Data obrigatória."),
  id_ingresso: yup
    .string()
    .required("Qual é o ID do ingresso do pedido?"),

});

//COMPONENTE

const EditPedido = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(validarProduto),
  });

  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    Axios.get(`http://localhost:3344/pedido_ingresso/${id}`).then((response) => {
      reset(response.data);
    });
  }, [id, reset]);

  

  const putPedido = (data) =>
    Axios.put(`http://localhost:3344/pedido_ingresso/${id}`, data)
      .then(() => {
        navigate("/");
        alert("Pedido editado com sucesso!");
      })
      .catch(() => {
        alert("Erro ao editar o pedido.");
      });

  return (
    <div className={styles.Bg}>
      <div className={styles.blackOverlay}>
        <div className={styles.Container}></div>

        <h1 className="my-3  text-center">Editar pedido</h1>

        <form className={`justify-content-center ${styles.formulario}`}
          onSubmit={handleSubmit(putPedido)}
        >
          <label htmlFor="titulo">Nome do cliente</label>
          <input className={styles.input} 
            type="text"
            name="nome_usuario"
            placeholder="Insira o nome do cliente"
            {...register("nome_usuario")}
          />
          <p className="error-message">{errors.nome_usuario?.message}</p>{" "}
          {/* depois eu vejo isso */}
          <label htmlFor="cpf">CPF do cliente</label>
          <input className={styles.input}
            type="text"
            name="cpf_usuario"
            placeholder="Insira o CPF do cliente"
            {...register("cpf_usuario")}
          />
          <p className="error-message">{errors.cpf_usuario?.message}</p>{" "}
          {/* depois eu vejo isso */}
          <label htmlFor="email">Email do cliente</label>
          <input className={styles.input}
            type="text"
            name="email"
            placeholder="exemplo@exemplo.com"
            {...register("email")}
          />
          <p className="error-message">{errors.email?.message}</p>{" "}
          {/* depois eu vejo isso */}
          <label htmlFor="id_ingresso">ID do Ingresso adquirido</label>
          <input className={styles.input}
            type="text"
            name="id_ingresso"
            placeholder="Insira o tipo de ingresso"
            {...register("id_ingresso")}
          />
          <p className="error-message">{errors.id_ingresso?.message}</p>{" "}
          {/* depois eu vejo isso */}
          <button className={styles.submit}>Confirmar</button>
        </form>

        <Link class="h1 text-light" className={styles.Link} to="/"><u>Voltar</u></Link>
      </div>
    </div>
  );
};

export default EditPedido;
