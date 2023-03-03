import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";


import { Link } from "react-router-dom";

import * as yup from "yup";

import Axios from "axios";

import React, { useEffect } from "react";

//Transformar alert em Toasfify //


import { useNavigate, useParams } from "react-router-dom";

//css
import styles from "../styles/EditProduto.module.css";

const validarProduto = yup.object({

  titulo: yup
    .string()
    .required("O nome do ingresso é obrigatório.")
    .max(30, "O nome precisa ter menos de 30 caracteres.")
    .min(4, "O nome precisa ter pelo menos 4 caracteres"),

  valor: yup
    .string()
    .required("Insira o valor do ingesso.")
    .max(10, "valor grande demais!"),

  descricao: yup.string().required("Descrição obrigatória."),

  imagem: yup
    .string()
    .required("Insira o link URL da foto desejada para o produto."),

});

//COMPONENTE

const EditProduto = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validarProduto),
  });

  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    Axios.get(`http://localhost:3344/produtos/${id}`)
      .then((response) => {
        const { titulo, valor, descricao, imagem } = response.data;
        reset({ titulo, valor, descricao, imagem });
      });
  }, [id, reset]);



  const putProduto = (data) =>
    Axios.put(`http://localhost:3344/produtos/${id}`, data)
      .then(() => {
        navigate("/produtos");
        alert("Produto editado com sucesso!");
      })
      .catch(() => {
        alert("Erro ao editar o produto.");
      });

  return (
    <>
      <div className={styles.Bg}>
        <div className={styles.blackOverlay}>
          <div className={styles.Container}>
            <form
              className={`justify-content-center ${styles.formulario}`}
              onSubmit={handleSubmit(putProduto)}
            >
              <label htmlFor="titulo">Título:</label>
              <input className={styles.input}
                type="text"
                name="titulo"
                placeholder="O nome/descrição do produto"
                {...register("titulo")}
              />
              <p className="error-message">{errors.titulo?.message}</p>{" "}


              {/* depois eu vejo isso */}
              <label htmlFor="valor">Valor:</label>
              <input className={styles.input}
                type="text"
                name="valor"
                placeholder="Insira o preço da mercadoria"
                {...register("valor")}
              />
              <p className="error-message">{errors.valor?.message}</p>{" "}
              {/* depois eu vejo isso */}


              <label htmlFor="descricao">Descrição:</label>
              <input className={styles.input}
                type="text"
                name="descricao"
                placeholder="Tamanhos, cores, estilo..."
                {...register("descricao")}
              />
              <p className="error-message">{errors.descricao?.message}</p>{" "}
              {/* depois eu vejo isso */}


              <label htmlFor="imagem">Imagem:</label>
              <input className={styles.input}
                type="text"
                name="imagem"
                placeholder="Insira o link URL da foto do produto"
                {...register("imagem")}
              />
              <p className="error-message">{errors.imagem?.message}</p>{" "}
              {/* depois eu vejo isso */}

              <button className={styles.submit}>Confirmar alteração</button>
            </form>
            <Link class="h1 text-light" to="/produtos"><u>Voltar</u></Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProduto;
