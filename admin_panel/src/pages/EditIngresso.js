import styles from "../styles/PostarIngresso.module.css";

import { Link, useNavigate, useParams } from "react-router-dom";

import Axios from "axios";

import { useEffect } from "react";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const validarIngresso = yup.object({
  nome: yup
    .string()
    .required("O nome do ingresso é obrigatório.")
    .max(30, "O nome precisa ter menos de 30 caracteres.")
    .min(4, "O nome precisa ter pelo menos 4 caracteres"),
  quantidade: yup
    .number()
    .required("Insira a quantidade de ingressos a vender."),
  data_evento: yup.string().required("Data obrigatória."),
  valor: yup
    .string()
    .required("Insira o valor do ingesso.")
    .max(10, "valor grande demais!"),
  foto: yup
    .string()
    .required("Insira o link URL da foto desejada para o ingresso."),
  foto_disponivel: yup
    .string()
    .required(
      "Insira o link URL da foto em formato quadrangular para o ingresso."
    ),
  foto_indisponivel: yup
    .string()
    .required(
      "Insira o link URL da foto em formato quadrangular para o ingresso (ESGOTADO)."
    ),
});

//COMPONENTE


function EditIngresso() {


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(validarIngresso),
  });

  const { id } = useParams();

  let navigate = useNavigate();

  useEffect(() => {
    Axios.get(`http://localhost:3344/ingresso/${id}`)
      .then((response) => {
        const { titulo, valor, descricao, imagem } = response.data;
        reset({ titulo, valor, descricao, imagem });
      })
  }, [id, reset])

  const putIngresso = (data) => Axios.put(`http://localhost:3344/ingresso/${id}`, data)
    .then(() => {
      navigate('/')
    })
    .catch(() => {
      alert("Erro ao adicionar o ingresso.");
    });

  return (
    <>
      <div className={styles.Bg}>
        <div className={styles.blackOverlay}>
          <div className={styles.Container}>
            <form
              className={`justify-content-center ${styles.formulario}`}
              onSubmit={handleSubmit(putIngresso)}
            >
              <label htmlFor="nome">Nome do Ingresso:</label>
              <input className={styles.input}
                type="text"
                name="nome"
                placeholder="Nome do ingresso"
                {...register("nome")}
              />
              <p className="error-message">{errors.nome?.message}</p>{" "}


              {/* depois eu vejo isso */}
              <label htmlFor="data_evento">Data do Evento:</label>
              <input className={styles.input}
                maxLength={10}
                type="text"
                name="data_evento"
                placeholder="Insira a data relativa ao ingresso"
                {...register("data_evento")}
              />
              <p className="error-message">{errors.data_evento?.message}</p>{" "}
              {/* depois eu vejo isso */}


              <label htmlFor="valor">Valor:</label>
              <input className={styles.input}
                type="text"
                name="valor"
                placeholder="Insira o preço do ingresso"
                {...register("valor")}
              />
              <p className="error-message">{errors.valor?.message}</p>{" "}
              {/* depois eu vejo isso */}


              <label htmlFor="quantidade">Quantidade:</label>
              <input className={styles.input}
                type="text"
                name="quantidade"
                placeholder="Insira o número de ingressos à venda"
                {...register("quantidade")}
              />
              <p className="error-message">{errors.quantidade?.message}</p>{" "}
              {/* depois eu vejo isso */}

              <label htmlFor="foto">Imagem:</label>
              <input className={styles.input}
                type="text"
                name="foto"
                placeholder="Insira a URL da imagem do ingresso (oficial)"
                {...register("foto")}
              />
              <p className="error-message">{errors.foto?.message}</p>{" "}


              {/* depois eu vejo isso */}
              <label htmlFor="foto_disponivel">Imagem quadrada:</label>
              <input className={styles.input}
                type="text"
                name="foto_disponivel"
                placeholder="URL da imagem (versão quadrada)"
                {...register("foto_disponivel")}
              />
              <p className="error-message">{errors.foto?.message}</p>{" "}
              {/* depois eu vejo isso */}

              <label htmlFor="foto_indisponivel">
                Imagem quadrada (de ingresso esgotado):
              </label>
              <input className={styles.input}
                type="text"
                name="foto_indisponivel"
                placeholder="URL da imagem (indisponível)"
                {...register("foto_indisponivel")}
              />
              <p className="error-message">{errors.foto?.message}</p>{" "}
              {/* depois eu vejo isso */}


              <button className={styles.submit}>Editar ingresso</button>
            </form>
            <Link class="h1 text-light" to="/"><u>Voltar</u></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditIngresso;
