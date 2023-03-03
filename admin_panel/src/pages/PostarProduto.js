import styles from "../styles/PostarProduto.module.css";

import { Link, useNavigate } from "react-router-dom";

import Axios from "axios";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

function PostarProduto() {

  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validarProduto),
  });

  const postIngresso = data =>
    Axios.post("http://localhost:3344/produtos", data)
      .then(() => {
        navigate("/produtos");
      })
      .catch(() => {
        alert("Erro ao adicionar o produto.");
      });

  return (
    <>
      <div className={styles.Bg}>
        <div className={styles.blackOverlay}>
          <div className={styles.Container}>
            <form
              className={`justify-content-center ${styles.formulario}`}
              onSubmit={handleSubmit(postIngresso)}
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

              <button className={styles.submit}>Adicionar produto</button>
            </form>
            <Link class="h1 text-light" to="/"><u>Voltar</u></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostarProduto;
