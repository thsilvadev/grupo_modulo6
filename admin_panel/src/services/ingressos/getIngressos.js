
const ingressosFromApi = {
    // data: [
    //     {
    //         nome: "Primeiro dia",
    //         id: "0",
    //         valor: "R$ 150,00",
    //         data_evento: "12/04/2023",
    //         quantidade: 10,
    //         foto_disponivel: "https://i.ibb.co/B48M8ZW/1.png",
    //         foto_indisponivel: "https://i.ibb.co/p13W1VH/5.png",
    //         foto: ""

    //     },

    //     {
    //         nome: "Segundo dia",
    //         id: "1",
    //         valor: "R$ 150,00",
    //         data_evento: "13/04/2023",
    //         quantidade: 10,
    //         foto_disponivel: "https://i.ibb.co/JpXnQ6y/2.png",
    //         foto_indisponivel: "https://i.ibb.co/QXfCLhC/6.png"

    //     },

    //     {
    //         nome: "Terceiro dia",
    //         id: "2",
    //         valor: "R$ 150,00",
    //         data_evento: "14/04/2023",
    //         quantidade: 10,
    //         foto_disponivel: "https://i.ibb.co/6HcmG0Z/3.png",
    //         foto_indisponivel: "https://i.ibb.co/8KpRkR2/7.png"
    //     },

    //     {
    //         nome: "Passaporte",
    //         id: "2",
    //         valor: "R$ 350,00",
    //         data_evento: "Todos os Dias",
    //         quantidade: 10,
    //         foto_disponivel: "https://i.ibb.co/MnMwRTP/4.png",
    //         foto_indisponivel: "https://i.ibb.co/rbkBd0h/8.png"
    //     }

    // ]
}

const getIngressos = async () => {

    return ingressosFromApi;
    // try{
    //     const ingressos = await  Api.get("/ingressos")
    //     return ingressos;
    // } catch (error){
    //     console.log("deu merda")
    // }
    
}

export default getIngressos;